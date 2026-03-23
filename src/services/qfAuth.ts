import AsyncStorage from "@react-native-async-storage/async-storage";

// ── Mock mode: flip to false when QF OAuth credentials are obtained ──
const QF_MOCK = true;

// ── QF OAuth2 Configuration ──
const QF_CLIENT_ID = "PLACEHOLDER_CLIENT_ID";
const QF_AUTH_URL = "https://oauth2.quran.foundation/oauth2/auth";
const QF_TOKEN_URL = "https://oauth2.quran.foundation/oauth2/token";
const QF_SCOPES = "openid offline_access user collection";

// ── Storage keys ──
const ACCESS_TOKEN_KEY = "@aidan_qf_access_token";
const REFRESH_TOKEN_KEY = "@aidan_qf_refresh_token";
const QF_CONNECTED_KEY = "@aidan_qf_connected";

export interface QFTokens {
  accessToken: string;
  refreshToken: string | null;
}

/** Check if user has connected their Quran.com account */
export async function isQFConnected(): Promise<boolean> {
  if (QF_MOCK) {
    const val = await AsyncStorage.getItem(QF_CONNECTED_KEY);
    return val === "true";
  }
  const token = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
  return token !== null;
}

/** Initiate QF OAuth2 login. In mock mode, simulates instant success. */
export async function loginWithQF(): Promise<boolean> {
  if (QF_MOCK) {
    await AsyncStorage.setItem(QF_CONNECTED_KEY, "true");
    await AsyncStorage.setItem(ACCESS_TOKEN_KEY, "mock_access_token");
    console.log("[QF Auth] Mock login success");
    return true;
  }

  // Real OAuth2 PKCE flow — requires expo-auth-session + expo-web-browser
  // Will be implemented when QF credentials are obtained:
  //
  // const discovery = { authorizationEndpoint: QF_AUTH_URL, tokenEndpoint: QF_TOKEN_URL };
  // const redirectUri = makeRedirectUri({ scheme: "aidan" });
  // const request = new AuthRequest({
  //   clientId: QF_CLIENT_ID,
  //   scopes: QF_SCOPES.split(" "),
  //   redirectUri,
  //   usePKCE: true,
  // });
  // const result = await request.promptAsync(discovery);
  // if (result.type === "success") {
  //   const tokenResponse = await exchangeCodeAsync({ code: result.params.code, ... }, discovery);
  //   await AsyncStorage.setItem(ACCESS_TOKEN_KEY, tokenResponse.accessToken);
  //   await AsyncStorage.setItem(REFRESH_TOKEN_KEY, tokenResponse.refreshToken ?? "");
  //   return true;
  // }
  return false;
}

/** Get stored QF tokens (or null if not connected) */
export async function getQFTokens(): Promise<QFTokens | null> {
  const accessToken = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
  if (!accessToken) return null;
  const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN_KEY);
  return { accessToken, refreshToken };
}

/** Disconnect Quran.com account */
export async function logoutQF(): Promise<void> {
  await AsyncStorage.multiRemove([ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, QF_CONNECTED_KEY]);
  console.log("[QF Auth] Logged out");
}
