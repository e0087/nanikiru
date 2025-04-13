// 牌姿パターン
const categories = [
    {
        id: "pattern1",
        variants: [
            { tiles: "23456zz", answer: ["1", "4", "7"] },
            { tiles: "34567zz", answer: ["2", "5", "8"] },
            { tiles: "45678zz", answer: ["3", "6", "9"] }
        ]
    },
    {
        id: "pattern2",
        variants: [
            { tiles: "1234567", answer: ["1", "4", "7"] },
            { tiles: "2345678", answer: ["2", "5", "8"] },
            { tiles: "3456789", answer: ["3", "6", "9"] }
        ]
    },
    {
        id: "pattern3",
        variants: [
            { tiles: "2345567", answer: ["2", "5", "8"] },
            { tiles: "3456678", answer: ["3", "6", "9"] },
            { tiles: "2344567", answer: ["1", "4", "7"] },
            { tiles: "3455678", answer: ["2", "5", "8"] }
        ]
    },
    {
        id: "pattern4",
        variants: [
            { tiles: "23444zz", answer: ["1", "4", "z"] },
            { tiles: "34555zz", answer: ["2", "5", "z"] },
            { tiles: "45666zz", answer: ["3", "6", "z"] },
            { tiles: "56777zz", answer: ["4", "7", "z"] },
            { tiles: "67888zz", answer: ["5", "8", "z"] },
            { tiles: "78999zz", answer: ["6", "9", "z"] },
            { tiles: "11123zz", answer: ["1", "4", "z"] },
            { tiles: "22234zz", answer: ["2", "5", "z"] },
            { tiles: "33345zz", answer: ["3", "6", "z"] },
            { tiles: "44456zz", answer: ["4", "7", "z"] },
            { tiles: "55567zz", answer: ["5", "8", "z"] },
            { tiles: "66678zz", answer: ["6", "9", "z"] }
        ]
    },
    {
        id: "pattern5",
        variants: [
            { tiles: "2333456", answer: ["1", "4", "7", "2"] },
            { tiles: "3444567", answer: ["2", "5", "8", "3"] },
            { tiles: "4555678", answer: ["3", "6", "9", "4"] },
            { tiles: "2345556", answer: ["1", "4", "7", "6"] },
            { tiles: "3456667", answer: ["2", "5", "8", "7"] },
            { tiles: "4567778", answer: ["3", "6", "9", "8"] }
        ]
    },
    {
        id: "pattern6",
        variants: [
            { tiles: "2223345", answer: ["1", "4", "3", "6"] },
            { tiles: "3334456", answer: ["2", "5", "4", "7"] },
            { tiles: "4445567", answer: ["3", "6", "5", "8"] },
            { tiles: "5556678", answer: ["4", "7", "6", "9"] },
            { tiles: "2344555", answer: ["1", "4", "3", "6"] },
            { tiles: "3455666", answer: ["2", "5", "4", "7"] },
            { tiles: "4566777", answer: ["3", "6", "5", "8"] },
            { tiles: "5677888", answer: ["4", "7", "6", "9"] }
        ]
    },
    {
        id: "pattern7",
        variants: [
            { tiles: "2223445", answer: ["3", "6", "4"] },
            { tiles: "3334556", answer: ["4", "7", "5"] },
            { tiles: "4445667", answer: ["5", "8", "6"] },
            { tiles: "5556778", answer: ["6", "9", "7"] },
            { tiles: "2334555", answer: ["1", "4", "3"] },
            { tiles: "3445666", answer: ["2", "5", "4"] },
            { tiles: "4556777", answer: ["3", "6", "5"] },
            { tiles: "5667888", answer: ["4", "7", "6"] },
            { tiles: "6778999", answer: ["5", "8", "7"] }
        ]
    },
    {
        id: "pattern8",
        variants: [
            { tiles: "2223456", answer: ["1", "4", "7", "3", "6"] },
            { tiles: "3334567", answer: ["2", "5", "8", "4", "7"] },
            { tiles: "4445678", answer: ["3", "6", "9", "5", "8"] },
            { tiles: "2345666", answer: ["1", "4", "7", "2", "5"] },
            { tiles: "3456777", answer: ["2", "5", "8", "3", "6"] },
            { tiles: "4567888", answer: ["3", "6", "9", "4", "7"] }
        ]
    },
    {
        id: "pattern9",
        variants: [
            { tiles: "1112346", answer: ["5", "6"] },
            { tiles: "2223457", answer: ["6", "7"] },
            { tiles: "3334568", answer: ["7", "8"] },
            { tiles: "4445679", answer: ["8", "9"] },
            { tiles: "1345666", answer: ["1", "2"] },
            { tiles: "2456777", answer: ["2", "3"] },
            { tiles: "3567888", answer: ["3", "4"] },
            { tiles: "4678999", answer: ["4", "5"] }
        ]
    },
    {
        id: "pattern10",
        variants: [
            { tiles: "1113345", answer: ["3", "6", "2"] },
            { tiles: "2224456", answer: ["4", "7", "3"] },
            { tiles: "3335567", answer: ["5", "8", "4"] },
            { tiles: "4446678", answer: ["6", "9", "5"] },
            { tiles: "2344666", answer: ["1", "4", "5"] },
            { tiles: "3455777", answer: ["2", "5", "6"] },
            { tiles: "4566888", answer: ["3", "6", "7"] },
            { tiles: "5677999", answer: ["4", "7", "8"] }
        ]
    },
    {
        id: "pattern11",
        variants: [
            { tiles: "1113456", answer: ["3", "6", "2"] },
            { tiles: "2224567", answer: ["4", "7", "3"] },
            { tiles: "3335678", answer: ["5", "8", "4"] },
            { tiles: "4446789", answer: ["6", "9", "5"] },
            { tiles: "1234666", answer: ["1", "4", "5"] },
            { tiles: "2345777", answer: ["2", "5", "6"] },
            { tiles: "3456888", answer: ["3", "6", "7"] },
            { tiles: "4567999", answer: ["4", "7", "8"] }
        ]
    },
    {
        id: "pattern12",
        variants: [
            { tiles: "1112233", answer: ["1", "4", "2", "3"] },
            { tiles: "2223344", answer: ["2", "5", "3", "4"] },
            { tiles: "3334455", answer: ["3", "6", "4", "5"] },
            { tiles: "4445566", answer: ["4", "7", "5", "6"] },
            { tiles: "5556677", answer: ["5", "8", "6", "7"] },
            { tiles: "6667788", answer: ["6", "9", "7", "8"] },
            { tiles: "2233444", answer: ["1", "4", "2", "3"] },
            { tiles: "3344555", answer: ["2", "5", "3", "4"] },
            { tiles: "4455666", answer: ["3", "6", "4", "5"] },
            { tiles: "5566777", answer: ["4", "7", "5", "6"] },
            { tiles: "6677888", answer: ["5", "8", "6", "7"] },
            { tiles: "7788999", answer: ["6", "9", "7", "8"] }
        ]
    },
    {
        id: "pattern13",
        variants: [
            { tiles: "1122233", answer: ["2", "1", "3"] },
            { tiles: "2233344", answer: ["3", "2", "4"] },
            { tiles: "3344455", answer: ["4", "3", "5"] },
            { tiles: "4455566", answer: ["5", "4", "6"] },
            { tiles: "5566677", answer: ["6", "5", "7"] },
            { tiles: "6677788", answer: ["7", "6", "8"] }
        ]
    },
    {
        id: "pattern14",
        variants: [
            { tiles: "2223444", answer: ["1", "2", "3", "4", "5"] },
            { tiles: "3334555", answer: ["2", "3", "4", "5", "6"] },
            { tiles: "4445666", answer: ["3", "4", "5", "6", "7"] },
            { tiles: "5556777", answer: ["4", "5", "6", "7", "8"] },
            { tiles: "6667888", answer: ["5", "6", "7", "8", "9"] }
        ]
    },
    {
        id: "pattern15",
        variants: [
            { tiles: "1112223", answer: ["1", "2", "3", "4"] },
            { tiles: "2223334", answer: ["2", "3", "4", "5"] },
            { tiles: "3334445", answer: ["3", "4", "5", "6"] },
            { tiles: "4445556", answer: ["4", "5", "6", "7"] },
            { tiles: "5556667", answer: ["5", "6", "7", "8"] },
            { tiles: "6667778", answer: ["6", "7", "8", "9"] },
            { tiles: "2333444", answer: ["1", "2", "3", "4"] },
            { tiles: "3444555", answer: ["2", "3", "4", "5"] },
            { tiles: "4555666", answer: ["3", "4", "5", "6"] },
            { tiles: "5666777", answer: ["4", "5", "6", "7"] },
            { tiles: "6777888", answer: ["5", "6", "7", "8"] },
            { tiles: "7888999", answer: ["6", "7", "8", "9"] }
        ]
    },
    {
        id: "pattern16",
        variants: [
            { tiles: "1113555", answer: ["2", "3", "4"] },
            { tiles: "2224666", answer: ["3", "4", "5"] },
            { tiles: "3335777", answer: ["4", "5", "6"] },
            { tiles: "4446888", answer: ["5", "6", "7"] },
            { tiles: "5557999", answer: ["6", "7", "8"] }
        ]
    }
];