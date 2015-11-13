FactionFactory = {};

FactionFactory.create = function () {
    return [
        {
            label: "Anarch Faction",
            name:'anarch',
            imageURL: '/img/runner/Anarch_Logo.png',
            credits: 5,
            numOfClicks: 4,
            curentClicks: 0,
            tags: 0,
            memoryUnit: 0,
            currentAgendaPts:0,
            maxAgendaPts:7
        }, {
            label: "Criminal Faction",
            name:'criminal',
            imageURL: '/img/runner/Criminal_Logo.png',
            credits: 5,
            numOfClicks: 4,
            curentClicks: 0,
            tags: 0,
            memoryUnit: 0,
            currentAgendaPts:0,
            maxAgendaPts:7
        }, {
            label: "Shaper Faction",
            name: 'shaper',
            imageURL: '/img/runner/Shaper_Logo.png',
            credits: 5,
            numOfClicks: 4,
            curentClicks: 0,
            tags: 0,
            currentAgendaPts:0,
            maxAgendaPts:7
        }
    ];
}