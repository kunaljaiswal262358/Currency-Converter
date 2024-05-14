let exchangeRate = {
    "IN": {
        "IN": 1,
        "US": 0.012,
        "AU": 0.018,
        "CN": 0.087,
    },
    "US": {
        "US": 1,
        "IN": 83.30,
        "AU": 1.52,
        "CN": 7.23,
    },
    "AU": {
        "AU": 1,
        "US": 0.66,
        "IN": 54.82,
        "CN": 4.76,
    },
    "CN": {
        "CN": 1,
        "US": 0.14,
        "AU": 0.21,
        "IN": 11.75,
    },
}

let exchangeRateAPI = (srcCode , destCode) => {
    return exchangeRate[srcCode][destCode];
}