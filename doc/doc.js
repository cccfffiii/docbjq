const config = [
    {
        a : "a", 
        b : "文件1.js",
    }, 
    {
        a: "b",
        b: "文件夹1",
        c: [
            {
                a: "a",
                b: "文件夹1文件1.js",
            },
            {
                a: "a",
                b: "文件夹1文件2.js",
            },
            {
                a: "b",
                b: "文件夹2",
                c: [
                    {
                        a: "a",
                        b: "文件夹2文件1.js",
                    },
                    {
                        a: "a",
                        b: "文件夹2文件2.js",
                    },
                ],
            },
        ],
    },
    {
        a: "a",
        b: "文件2.js",
    },
];

export default config; 

