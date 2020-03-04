type Any = number | string | Currency;
interface Currency {
    add(number: Any): Currency;
    subtract(number: Any): Currency;
    multiply(number: Any): Currency;
    divide(number: Any): Currency;
    distribute(count: number): Array<Currency>;
    dollars(): number;
    cents(): number;
    format(useSymbol?: boolean): string;
    toString(): string;
    toJSON(): number;
    readonly intValue: number;
    readonly value: number;
}
interface Options {
    symbol?: string,
    separator?: string,
    decimal?: string,
    formatWithSymbol?: boolean,
    errorOnInvalid?: boolean,
    precision?: number,
    increment?: number,
    useVedic?: boolean,
    pattern?: string,
    negativePattern?: string,
}
interface CurrencyConstructor {
    new(value: Any, opts: Options): Currency
    prototype: Currency
}

const Result = function currency(this: Currency, value: Any, opts: Options): void {} as Function as CurrencyConstructor;



let res = new Result('sss', {useVedic: true})

console.log(res)
