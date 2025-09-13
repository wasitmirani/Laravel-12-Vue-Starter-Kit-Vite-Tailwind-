import { defineStore } from 'pinia';
import { Helpers } from '../Utils/Helper';
import { DropdownService } from '../Services/settings/settingsService';

export const useSettingsStore = defineStore('settings', () => {
  let countries = Helpers.useDynamicRef([]);
  let timezones = Helpers.useDynamicRef([]);
  let languages = Helpers.useDynamicRef([]);
  const countriesLoaded = Helpers.useDynamicRef(false);
  const timezonesLoaded = Helpers.useDynamicRef(false);
  const languagesLoaded = Helpers.useDynamicRef(false);



  async function fetchCountries() {
    console.log('ln',countries.value);
    if (countriesLoaded.value) return; // Exit if already loaded
    try {
      countries.value = await DropdownService.countries();
      countriesLoaded.value = true;
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  }

  async function fetchTimezones() {
    if (timezonesLoaded.value) return; // Exit if already loaded
    try {
      timezones.value = await DropdownService.timezones();
      timezonesLoaded.value = true;
    } catch (error) {
      console.error('Error fetching timezones:', error);
    }
  }

  async function fetchLanguages() {
    if (languagesLoaded.value) return; // Exit if already loaded
    try {
      languages.value = await DropdownService.languages();
      languagesLoaded.value = true;

    } catch (error) {
      console.error('Error fetching languages:', error);
    }
  }


  return { countries, timezones, languages, fetchCountries, fetchTimezones, fetchLanguages };
});
