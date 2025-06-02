export interface UserSettings {
  theme: "light" | "dark" | "system";
}

export type UserSettingsKey = keyof UserSettings;

export const defaultUserSettings: UserSettings = {
  theme: "system",
};
