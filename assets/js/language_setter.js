/*
 * This JavaScript file controls site languages.
 */

const translations = {
    ja: "../lang/ja.json",
    en: "../lang/en.json"
};

/**
 * Replace all translatable contents with the given language.
 *
 * Arguments:
 *     lang (string): Valid language code.
 *         ja, en
 *
 * Side Effects:
 *     - Replace all translatable texts.
 *     - Set the HTML lang attribute.
 */
async function setLanguage(lang) {
    if (!Object.hasOwn(translations, lang)) {
        throw new Error(
            `language_setter.js:\nGiven language is invalid: '${lang}'`
        );
    }

    const path = translations[lang];

    const module = await import(path, {
        with: { type: "json" }
    });

    const data = module.default;

    document.documentElement.lang = lang;

    const elements = document.querySelectorAll("[data-i18n]");

    for (const element of elements) {
        const key = element.dataset.i18n;
        const value = _getTranslation(data, key);

        if (value == undefined) {
            console.error(`Translation key not found: ${key}`)
            continue;
        }

        element.textContent = value;
    }
}

/**
 * This function return a value in given data along with given key.
 * @param {*} data Target language data. Expected as json default data.
 * @param {string} key Use . to express nested structure.
 * @returns
 */
function _getTranslation(data, key){
    return key.split(".").reduce((current, part) => current?.[part], data);
}