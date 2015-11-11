FactionFactory = {};

FactionFactory.create = function () {
    return [
        {
            label: "Anarch Faction",
            name:'anarch',
            credits: 5,
            numOfClicks: 4,
            curentClicks: 0,
            tags: 0,
            memoryUnit: 0,
        }, {
            label: "Criminal Faction",
            name:'criminal',
            credits: 5,
            numOfClicks: 4,
            curentClicks: 0,
            tags: 0,
            memoryUnit: 0,
        }, {
            label: "Shaper Faction",
            name: 'shaper',
            credits: 5,
            numOfClicks: 4,
            curentClicks: 0,
            tags: 0,
        }
    ];
}