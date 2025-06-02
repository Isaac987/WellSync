import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserSettings, UserSettingsKey, defaultUserSettings } from "@settings/types";

const USER_SETTINGS_KEY = "user_settings";

/**
 * Service for managing user settings using persistent storage.
 *
 * The `UserSettingsService` provides methods to retrieve and update user settings,
 * handling serialization and deserialization to and from persistent storage (e.g., AsyncStorage).
 * It ensures that default settings are used when no user-specific settings are found,
 * and merges stored settings with defaults to accommodate updates to the settings schema.
 *
 * @remarks
 * - All settings are stored under a single key in persistent storage.
 * - Methods are asynchronous and return Promises.
 * - Handles partial updates and schema migrations gracefully.
 *
 * @example
 * ```typescript
 * const service = new UserSettingsService();
 * const theme = await service.getSetting('theme');
 * await service.setSetting('notificationsEnabled', true);
 * ```
 */
export class UserSettingsService {
  private async getAllSettings(): Promise<UserSettings> {
    var settings: UserSettings = defaultUserSettings;

    try {
      const settingsString = await AsyncStorage.getItem(USER_SETTINGS_KEY);

      if (settingsString) {
        // Read as a partial in case the settings have been updated
        const storedSettings = JSON.parse(settingsString) as Partial<UserSettings>;

        // Merge the settings, overwriting 'settings' with 'storedSettings'
        settings = { ...settings, ...storedSettings };
      }
    } catch (error) {
      console.error("UserSettingsService: Error loading settings:", error);
    }

    return settings;
  }

  private async setAllSettings(settings: UserSettings): Promise<void> {
    try {
      const settingsString = JSON.stringify(settings);
      await AsyncStorage.setItem(USER_SETTINGS_KEY, settingsString);
    } catch (error) {
      console.error("UserSettingsService: Error saving settings:", error);
      throw error;
    }
  }

  async getSetting<K extends UserSettingsKey>(key: K): Promise<UserSettings[K]> {
    const allSettings = await this.getAllSettings();
    return allSettings[key];
  }

  async setSetting<K extends UserSettingsKey>(key: K, value: UserSettings[K]): Promise<void> {
    try {
      var allSettings = await this.getAllSettings();
      allSettings = { ...allSettings, [key]: value };
      await this.setAllSettings(allSettings);
    } catch (error) {
      console.error(`UserSettingsService: Error setting preference '${String(key)}':`, error);
      throw error;
    }
  }
}

export const userSettingsService = new UserSettingsService();
