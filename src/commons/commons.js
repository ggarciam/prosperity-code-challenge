export function getHouseId(url) {
    return url.substr(url.lastIndexOf('/') + 1);
}
