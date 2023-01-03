function getPositionWrapper() {
    // Simple wrapper
    return new Promise((res, rej) => {
        window.navigator.geolocation.getCurrentPosition(res, rej);
    });
}

export const getCurrentPosition = async () => {
    const coords = await getPositionWrapper()
    return coords
}