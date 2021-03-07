export const match = <R>(tests: { test: boolean, value: R }[]): R => {
    const results = tests.filter(test => test.test);
    //@ts-ignore
    return results.length > 0 ? results[0].value : null;
}
