/**
 * changes list of objects to list of strings that can be used in html tree
 * @param {array} sources
 * @param {string} template
 */

export default function renderSourceOption(sources, template) {
    const result = [];

    const replacement = { key: 'index', value: 'source' };
    const getValue = (tag, source) => {
        let val = '';
        for (const key in replacement) {
            if (key === tag) {
                val = source[replacement[key]];
                break;
            }
        }
        return val;
    };

    sources.forEach((source, index) => result.push(template.replace(/{(\w+)}/g,
        (match, tag) => getValue(tag, { source, index }))));

    return result;
}
