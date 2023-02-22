const kb = require('./keyboard-buttons')
const CATEGORIES = require('./categories')
const COCTAILS = require('./coctails')

const epicCoctails = COCTAILS.filter(item => item.category === CATEGORIES.epic)

const actionCoctails = COCTAILS.filter(item => item.category === CATEGORIES.action)

const epicButtons = buttonsGenerate(epicCoctails)

const actionButtons = buttonsGenerate(actionCoctails)

function buttonsGenerate(coctails){
    const result = []
    let i = 0
    let currenResult = []
    while( i < coctails.length){ //универсальная функция без привязки к категории
    currenResult.push(coctails[i].id)
    if(currenResult.length === 2) {
        result.push(currenResult)
        currenResult = []
    }
    i++
    }
    if(currenResult.length > 0){
        result.push(currenResult)
    }
    return result
}

module.exports = {
    home: [
        [kb.home.info, kb.home.about],
        [kb.home.bar]
    ],
    menubar: [
        [kb.barsmenu.random],
        [kb.barsmenu.action, kb.barsmenu.epic],
        [kb.backtohome]
    ],
    [CATEGORIES.epic]: [
        ...epicButtons,
        [kb.backtomenubar]
    ],
    [CATEGORIES.action]: [
        ...actionButtons,
        [kb.backtomenubar]
    ]

}

// epicgun: [
//     [kb.gunepic.jack],
//     [kb.gunepic.henessy, kb.gunepic.jameson],
//     [kb.backtomenubar]
// ],
// actions: [
//     [kb.actioncoc.vampire],
//     [kb.actioncoc.absentbull, kb.actioncoc.rose],
//     [kb.backtomenubar]
// ]