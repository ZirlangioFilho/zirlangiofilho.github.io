const breakpoints = {
    medium: '1080px',
    mobile: '768px',
    minMobile: '425px;'
}

export const devices = {
    medium: `(max-width: ${breakpoints.medium})`,
    mobile: `(max-width: ${breakpoints.mobile})`,
    minMobile: `(max-width: ${breakpoints.minMobile})`,
}