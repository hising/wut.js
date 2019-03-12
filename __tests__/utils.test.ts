import {encode, paramEncode, sprintf} from "../src/utils";

test("encodes a javascript object to querystring", () => {
    let params = {
        a: 2,
        b: 2,
        c: [3,2,1],
        d: "mystring",
        e: ";wow"
    };
    let queryString = encode(params);
    expect(queryString).toBe("a=2&b=2&c=[3,2,1]&d=mystring&e=%3Bwow");
});

test("paramEncode handles strings and arrays correctly", () => {
    let param1 = "1";
    let param2 = [1,2,3];
    let param3 = ";1";
    let param4 = [";1", 2, 3];

    let result1 = paramEncode(param1);
    let result2 = paramEncode(param2);
    let result3 = paramEncode(param3);
    let result4 = paramEncode(param4);

    expect(result1).toBe("1");
    expect(result2).toBe("[1,2,3]");
    expect(result3).toBe("%3B1");
    expect(result4).toBe("[%3B1,2,3]");

});

test("sprintf correctly formats a string", () => {
    let str = "My name is %s. I am from %s";
    let name = "Mattias";
    let city = "Knivsta";
    let formatted = sprintf(str, name, city);
    expect(formatted).toBe("My name is Mattias. I am from Knivsta");
});



