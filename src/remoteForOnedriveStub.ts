// ONEDRIVE DISABLED - Stub file for browser compatibility
// This file replaces remoteForOnedrive.ts to avoid @azure/msal-node build issues

export const COMMAND_CALLBACK_ONEDRIVE = "remotely-sync-cb-onedrive";

export interface OnedriveConfig {
  clientID: string;
  authority: string;
  remoteBaseDir: string;
  refreshToken: string;
  username: string;
  credentialsShouldBeDeletedAtTime: number;
}

export const DEFAULT_ONEDRIVE_CONFIG: OnedriveConfig = {
  clientID: "",
  authority: "https://login.microsoftonline.com/common",
  remoteBaseDir: "",
  refreshToken: "",
  username: "",
  credentialsShouldBeDeletedAtTime: 0,
};

export type AccessCodeResponseSuccessfulType = {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
};

export async function getAuthUrlAndVerifier(
  clientID: string,
  authority: string
): Promise<{ authUrl: string; verifier: string }> {
  return { authUrl: "", verifier: "" };
}

export async function sendAuthReq(
  clientID: string,
  authority: string,
  code: string,
  verifier: string
): Promise<AccessCodeResponseSuccessfulType> {
  return {
    access_token: "",
    token_type: "Bearer",
    expires_in: 0,
    refresh_token: "",
  };
}

export function setConfigBySuccessfullAuthInplace(
  config: OnedriveConfig,
  rsp: AccessCodeResponseSuccessfulType,
  saveFunc: () => Promise<void>
): void {}

export function getOnedriveClient(
  config: OnedriveConfig,
  remoteBaseDir: string,
  saveConfigFunc: () => Promise<void>
): any {
  return {
    getUser: async () => "",
    getRemoteMetadata: async () => ({ files: [] }),
    uploadToRemote: async () => {},
    deleteRemote: async () => {},
    downloadFromRemote: async () => {},
  };
}

export type WrappedOnedriveClient = ReturnType<typeof getOnedriveClient>;
