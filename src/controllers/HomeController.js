const fs = require('fs');
var jwt = require('jsonwebtoken');
let key_private = 'nam077';

let getHomePage = (req, res) => {
    let dataJson = require('../../data.json');
    res.render('index', { data: dataJson });
};
let dataJsonMake = () => {
    let dataJson = [];
    let objectData = {};
    let dataHyphen = [
        'hyphen.case',
        'hyphen.sc1',
        'hyphen.case.ss01',
        'hyphen.case.ss02',
        'hyphen.sc1.ss01',
        'hyphen.sc1.ss02',
    ];
    let dataCharacter = ['A', 'E', 'I', 'O', 'U', 'Y', 'i', 'Ư,Ơ', 'D,d'];
    let dataGrave = ['grave', 'gravecomb', 'grave.ss01', 'grave.ss02', 'gravecomb.ss01', 'gravecomb.ss02'];
    let dataAcute = ['acute', 'acutecomb', 'acute.ss01', 'acute.ss02', 'acutecomb.ss01', 'acutecomb.ss02'];
    let dataTilde = ['tilde', 'tildecomb', 'tilde.ss01', 'tilde.ss02', 'tildecomb.ss01', 'tildecomb.ss02'];
    let dataHoi = [
        'hookabovecomb.case',
        'hookabovecomb',
        'hookabovecomb.case.ss01',
        'hookabovecomb.case.ss02',
        'hookabovecomb.ss01',
        'hookabovecomb.ss02',
    ];

    let dataDot = [
        'dotbelowcomb.case',
        'dotbelowcomb',
        'dotbelowcomb.case.ss01',
        'dotbelowcomb.case.ss02',
        'dotbelowcomb.ss01',
        'dotbelowcomb.ss02',
    ];
    let dataCir = [
        'circumflex',
        'circumflexcomb',
        'circumflex.ss01',
        'circumflex.ss02',
        'circumflexcomb.ss01',
        'circumflexcomb.ss02',
    ];
    let dataBreve = ['breve', 'brevecomb', 'breve.ss01', 'breve.ss02', 'brevecomb.ss01', 'brevecomb.ss02'];
    let dataHorn = ['horn', 'horncomb', 'horn.ss01', 'horn.ss01', 'horncomb.ss01', 'horncomb.ss02', 'horncomb.ss03'];
    let dataDotlessi = [
        'dotlessi',
        'dotlessi.ss01',
        'dotlessi.ss02',
        'dotlessi.ss03',
        'dotlessi.ss04',
        'dotlessi.ss05',
    ];
    let dataFeatures = ['ss01', 'ss02', 'ss03', 'ss04', 'ss05', 'ss06', 'ss07', 'ss08', 'ss09', 'ss10'];
    let dataMakeHorn = ['Cả Hai', 'Chữ Hoa', 'Chữ Thường', 'Không Tạo'];
    let createDotlessi = ['Tạo', 'Không Tạo'];

    objectData = {};
    objectData['name'] = 'Hyphen';
    objectData['data'] = dataHyphen;
    dataJson.push(objectData);

    objectData = {};
    objectData['name'] = 'Character';
    objectData['data'] = dataCharacter;
    dataJson.push(objectData);

    objectData = {};
    objectData['name'] = 'Grave';
    objectData['data'] = dataGrave;
    dataJson.push(objectData);

    objectData = {};
    objectData['name'] = 'Acute';
    objectData['data'] = dataAcute;
    dataJson.push(objectData);

    objectData = {};
    objectData['name'] = 'Tilde';
    objectData['data'] = dataTilde;
    dataJson.push(objectData);

    objectData = {};
    objectData['name'] = 'Hoi';
    objectData['data'] = dataHoi;
    dataJson.push(objectData);

    objectData = {};
    objectData['name'] = 'Grave';
    objectData['data'] = dataGrave;
    dataJson.push(objectData);

    objectData = {};
    objectData['name'] = 'Nang';
    objectData['data'] = dataDot;
    dataJson.push(objectData);

    objectData = {};
    objectData['name'] = 'Circumflex';
    objectData['data'] = dataCir;
    dataJson.push(objectData);

    objectData = {};
    objectData['name'] = 'Breve';
    objectData['data'] = dataBreve;
    dataJson.push(objectData);

    objectData = {};
    objectData['name'] = 'Horn';
    objectData['data'] = dataHorn;
    dataJson.push(objectData);

    objectData = {};
    objectData['name'] = 'Dotlessi';
    objectData['data'] = dataDotlessi;
    dataJson.push(objectData);

    objectData = {};
    objectData['name'] = 'Features';
    objectData['data'] = dataFeatures;
    dataJson.push(objectData);

    objectData = {};
    objectData['name'] = 'MakeHorn';
    objectData['data'] = dataMakeHorn;
    dataJson.push(objectData);

    objectData = {};
    objectData['name'] = 'Dotlessi';
    objectData['data'] = dataDotlessi;
    dataJson.push(objectData);

    objectData = {};
    objectData['name'] = 'CreateDotlessi';
    objectData['data'] = createDotlessi;
    dataJson.push(objectData);

    return dataJson;
};
let getLogin = (req, res) => {
    return res.render('login');
};
let checkAuth = (req, res, next) => {
    let cookie = req.cookies.auth;
    if (cookie) {
        try {
            var decoded = jwt.verify(cookie, key_private);
            console.log(decoded);
            if (decoded) {
                if (decoded._id === '627fda80de58afbe8f51149e') next();
                else return res.redirect('/login');
            }
        } catch (err) {
            console.log(err);
        }
    } else {
        return res.redirect('/login');
    }
};
let checkAuthLogin = (req, res, next) => {
    let cookie = req.cookies.auth;
    if (cookie) {
        try {
            var decoded = jwt.verify(cookie, key_private);
            if (decoded) {
                if (decoded._id === '627fda80de58afbe8f51149e') return res.redirect('/');
                else next();
            }
        } catch (err) {
            console.log(err);
        }
    } else {
        next();
    }
};
let checkLogin = (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    if (username && password) {
        if (username === 'nam077' && password === 'admin') {
            let data = {
                _id: '627fda80de58afbe8f51149e',
            };
            let hh = jwt.sign(data, key_private);
            return res.json({
                message: 'done',
                auth: hh,
            });
        } else {
            res.redirect('/login');
        }
    }
};
let makeData = async (req, res) => {
    let dataJson = dataJsonMake();
    const data2 = JSON.stringify(dataJson);
    var file = fs.createWriteStream('data.json');
    try {
        fs.writeFileSync('data.json', data2);
        console.log('Lưu danh sách font thành công !');
    } catch (error) {
        console.error(err);
    }

    res.send('sdg');
};
module.exports = {
    getHomePage: getHomePage,
    makeData: makeData,
    getLogin: getLogin,
    checkAuth: checkAuth,
    checkLogin: checkLogin,
    checkAuthLogin: checkAuthLogin,
};
