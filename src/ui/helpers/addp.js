export function fetchADDPs() {
    return new Promise((resolve) => {
        fetch(process.env.PUBLIC_URL + '/asset-manifest.json')
            .then(response => response.json())
            .then(async manifest => {
                const filtered = Object.entries(manifest.files)
                    .filter(
                        ([key,]) => key.includes('src/markdown/ADDP')
                    )
                    .map(([, value]) => {
                        let parts = value.split('/');
                        parts = parts[parts.length - 1].split('.');

                        return [parts[0], value];
                    });

                const transformed = await transformADDPs(filtered);

                resolve(transformed);
            });
    });
}

export async function transformADDPs(filteredADDPs) {
    return filteredADDPs.reduce(async (p, [addp, path]) => {
        const previous = await p;
        const category = getADDPCategoryFromPath(path);

        return {
            ...previous,
            [category]: {
                ...(previous[category] ? previous[category] : {}),
                [addp]: await fetchTrueFileLocation(path),
            }
        };
    }, {});
}

export function getADDPCategoryFromPath(path) {
    let parts = path.split('/');
    parts.splice(0, 4);

    return parts.length === 1 ? 'Other' : parts[0];
}

export function fetchTrueFileLocation(path) {
    return fetch(process.env.PUBLIC_URL + path)
        .then(response => response.text())
        .then(markdown => markdown.match(/(["'])(?:(?=(\\?))\2.)*?\1/g)[0].replace(/['"]+/g, ''));
}

export function buildPageDataFromADDP(ADDP) {
    return {
        number: ADDP[0],
        location: ADDP[1],
        state: 'draft',
    }
}

export function getADDPFromPageData(pageData) {
    return [
        pageData.number,
        pageData.location,
    ];
}
