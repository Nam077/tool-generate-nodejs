let arr_A = ['A'],
    arr_E = ['E'],
    arr_I = ['I'],
    arr_O = ['O'],
    arr_U = ['U'],
    arr_Y = ['Y'],
    arr_Dcroat = ['Dcroat'],
    arr_D = ['D'],
    arr_Ohorn = ['Ohorn'],
    arr_Uhorn = ['Uhorn'];
let arr_a = ['a'],
    arr_e = ['e'],
    arr_i = ['i'],
    arr_o = ['o'],
    arr_u = ['u'],
    arr_y = ['y'],
    arr_d = ['d'],
    arr_dcroat = ['dcroat'],
    arr_ohorn = ['ohorn'],
    arr_uhorn = ['uhorn'],
    arr_dotlessi = ['dotlessi'];
let styleCharater, inputGlyphs, createCode;
let arrCharacter = [];
let styleGrave1,
    styleAcute1,
    styleTilde1,
    styleHoi1,
    styleDot1,
    styleCir,
    styleBreve,
    styleGrave2,
    styleAcute2,
    styleTilde2,
    styleHoi2,
    styleHorn1,
    styleHorn2,
    creatHorn,
    styleFeatures,
    styleHyphen1,
    styleHyphen2,
    styleDotlessi,
    createDotlessi;
let creatCode = () => {
    beginStart(arrCharacter);
    console.log(arrCharacter);
    let CodeRender = makeCode();
    createCode.value = CodeRender;
};
let beginStart = () => {
    removeData();
    inputGlyphs = document.getElementById('inputGlyphs').value;
    let s = inputGlyphs;
    s = s.replaceAll(' ', '');
    while (s.search('//') >= 0) s = s.replaceAll('//', '/');
    s = s.trim();
    if (s[0] === '/') {
        s = s.substring(1);
    }
    if (s[s.length - 1] === '/') {
        s = s.slice(0, -1);
    }
    arrCharacter = s.split('/');
    styleCharater = document.getElementById('styleCharater').value;
    styleGrave1 = document.getElementById('styleGrave1').value;
    styleAcute1 = document.getElementById('styleAcute1').value;
    styleTilde1 = document.getElementById('styleTilde1').value;
    styleHoi1 = document.getElementById('styleHoi1').value;
    styleDot1 = document.getElementById('styleDot1').value;
    styleCir = document.getElementById('styleCir').value;
    styleBreve = document.getElementById('styleBreve').value;
    styleGrave2 = document.getElementById('styleGrave2').value;
    styleAcute2 = document.getElementById('styleAcute2').value;
    styleTilde2 = document.getElementById('styleTilde2').value;
    styleHoi2 = document.getElementById('styleHoi2').value;
    styleHorn1 = document.getElementById('styleHorn1').value;
    styleHorn2 = document.getElementById('styleHorn2').value;
    creatHorn = document.getElementById('creatHorn').value;
    styleFeatures = document.getElementById('styleFeatures').value;
    styleHyphen1 = document.getElementById('styleHyphen1').value;
    styleHyphen2 = document.getElementById('styleHyphen2').value;
    styleDotlessi = document.getElementById('styleDotlessi').value;
    createDotlessi = document.getElementById('createDotlessi').value;
    createCode = document.getElementById('output-text');
    ChacracterClasscify(arrCharacter);
};
let ChacracterClasscify = (arrCharacter) => {
    for (let i = 0; i < arrCharacter.length; i++) {
        let singleCharacter = arrCharacter[i].split('.');
        if (singleCharacter[0] === 'D' && arr_D.includes(arrCharacter[i]) == false) arr_D.push(arrCharacter[i]);
        if (singleCharacter[0] === 'Dcroat' && arr_Dcroat.includes(arrCharacter[i]) == false)
            arr_Dcroat.push(arrCharacter[i]);
        if (singleCharacter[0] === 'A' && arr_A.includes(arrCharacter[i]) == false) arr_A.push(arrCharacter[i]);
        if (singleCharacter[0] === 'E' && arr_E.includes(arrCharacter[i]) == false) arr_E.push(arrCharacter[i]);
        if (singleCharacter[0] === 'I' && arr_I.includes(arrCharacter[i]) == false) arr_I.push(arrCharacter[i]);
        if (singleCharacter[0] === 'O' && arr_O.includes(arrCharacter[i]) == false) arr_O.push(arrCharacter[i]);
        if (singleCharacter[0] === 'U' && arr_U.includes(arrCharacter[i]) == false) arr_U.push(arrCharacter[i]);
        if (singleCharacter[0] === 'Ohorn' && arr_Ohorn.includes(arrCharacter[i]) == false)
            arr_Ohorn.push(arrCharacter[i]);
        if (singleCharacter[0] === 'Uhorn' && arr_Uhorn.includes(arrCharacter[i]) == false)
            arr_Uhorn.push(arrCharacter[i]);
        if (singleCharacter[0] === 'Y' && arr_Y.includes(arrCharacter[i]) == false) arr_Y.push(arrCharacter[i]);

        if (singleCharacter[0] === 'd' && arr_d.includes(arrCharacter[i]) == false) arr_d.push(arrCharacter[i]);
        if (singleCharacter[0] === 'dcroat' && arr_dcroat.includes(arrCharacter[i]) == false)
            arr_dcroat.push(arrCharacter[i]);
        if (singleCharacter[0] === 'a' && arr_a.includes(arrCharacter[i]) == false) arr_a.push(arrCharacter[i]);
        if (singleCharacter[0] === 'e' && arr_e.includes(arrCharacter[i]) == false) arr_e.push(arrCharacter[i]);
        if (singleCharacter[0] === 'i' && arr_i.includes(arrCharacter[i]) == false) arr_i.push(arrCharacter[i]);
        if (singleCharacter[0] === 'dotlessi' && arr_dotlessi.includes(arrCharacter[i]) == false)
            arr_dotlessi.push(arrCharacter[i]);
        if (singleCharacter[0] === 'o' && arr_o.includes(arrCharacter[i]) == false) arr_o.push(arrCharacter[i]);
        if (singleCharacter[0] === 'u' && arr_u.includes(arrCharacter[i]) == false) arr_u.push(arrCharacter[i]);
        if (singleCharacter[0] === 'ohorn' && arr_ohorn.includes(arrCharacter[i]) == false)
            arr_ohorn.push(arrCharacter[i]);
        if (singleCharacter[0] === 'uhorn' && arr_uhorn.includes(arrCharacter[i]) == false)
            arr_uhorn.push(arrCharacter[i]);
        if (singleCharacter[0] === 'y' && arr_y.includes(arrCharacter[i]) == false) arr_y.push(arrCharacter[i]);
    }
};

let style_Default = (value, features) => {
    let local = value.split('.');
    let glyphgrave = value + '+' + styleGrave1 + '=' + local[0] + 'grave' + '.' + features;
    let glyphacute = value + '+' + styleAcute1 + '=' + local[0] + 'acute' + '.' + features;
    let glyphtilde = value + '+' + styleTilde1 + '=' + local[0] + 'tilde' + '.' + features;
    let glyphhoi = value + '+' + styleHoi1 + '=' + local[0] + 'hoi' + '.' + features;
    let glyphnang = value + '+' + styleDot1 + '=' + local[0] + 'dotbelow' + '.' + features;
    let kieu1 = glyphgrave + '\r\n' + glyphacute + '\r\n' + glyphtilde + '\r\n' + glyphhoi + '\r\n' + glyphnang;
    return kieu1;
};

let style_Circumflex = (value, features) => {
    let local = value.split('.');
    let glyphcir = value + '+' + styleCir + '=' + local[0] + 'circumflex' + '.' + features;
    let glyphgrave = value + '+' + styleCir + '+' + styleGrave2 + '=' + local[0] + 'circumflexgrave' + '.' + features;
    let glyphacute = value + '+' + styleCir + '+' + styleAcute2 + '=' + local[0] + 'circumflexacute' + '.' + features;
    let glyphtilde = value + '+' + styleCir + '+' + styleTilde2 + '=' + local[0] + 'circumflextilde' + '.' + features;
    let glyphhoi = value + '+' + styleCir + '+' + styleHoi2 + '=' + local[0] + 'circumflexhoi' + '.' + features;
    let glyphnang = value + '+' + styleCir + '+' + styleDot1 + '=' + local[0] + 'circumflexdotbelow' + '.' + features;
    let kieu2 = glyphcir + '\r\n' + glyphgrave + '\r\n' + glyphacute + '\r\n' + glyphtilde + '\r\n' + glyphhoi + '\r\n' + glyphnang;
    return kieu2;
};
let style_Breve = (value, features) => {
    let local = value.split('.');
    let glyphbreve = value + '+' + styleBreve + '=' + local[0] + 'breve' + '.' + features;
    let glyphgreve = value + '+' + styleBreve + '+' + styleGrave2 + '=' + local[0] + 'brevegrave' + '.' + features;
    let glyphacute = value + '+' + styleBreve + '+' + styleAcute2 + '=' + local[0] + 'breveacute' + '.' + features;
    let glyphtilde = value + '+' + styleBreve + '+' + styleTilde2 + '=' + local[0] + 'brevetilde' + '.' + features;
    let glyphhoi = value + '+' + styleBreve + '+' + styleHoi2 + '=' + local[0] + 'brevehoi' + '.' + features;
    let glyphnang = value + '+' + styleBreve + '+' + styleDot1 + '=' + local[0] + 'brevedotbelow' + '.' + features;
    let kieu3 = glyphbreve + '\r\n' + glyphgreve + '\r\n' + glyphacute + '\r\n' + glyphtilde + '\r\n' + glyphhoi + '\r\n' + glyphnang;
    return kieu3;
};

let style_Horn = (value, features) => {
    let local = value.split('.');
    let horn = '';
    if (local[0] === 'O' || local[0] === 'U') {
        horn = styleHorn1;
    }
    if (local[0] === 'o' || local[0] === 'u') {
        horn = styleHorn2;
    }
    let glyphhorn = value + '+' + horn + '=' + local[0] + 'horn' + '.' + features;
    let glyphgrave = value + '+' + horn + '+' + styleGrave1 + '=' + local[0] + 'horngrave' + '.' + features;
    let glyphacute = value + '+' + horn + '+' + styleAcute1 + '=' + local[0] + 'hornacute' + '.' + features;
    let glyphtilde = value + '+' + horn + '+' + styleTilde1 + '=' + local[0] + 'horntilde' + '.' + features;
    let glyphhoi = value + '+' + horn + '+' + styleHoi1 + '=' + local[0] + 'hornhoi' + '.' + features;
    let glyphnang = value + '+' + horn + '+' + styleDot1 + '=' + local[0] + 'horndotbelow' + '.' + features;
    let kieu4 = glyphhorn + '\r\n' + glyphgrave + '\r\n' + glyphacute + '\r\n' + glyphtilde + '\r\n' + glyphhoi + '\r\n' + glyphnang;
    return kieu4;
};

let make_Horn = (value, features) => {
    let local = value.split('.');
    let horn = '';
    if (local[0] == 'O' || local[0] == 'U') {
        horn = styleHorn1;
    }
    if (local[0] == 'o' || local[0] == 'u') {
        horn = styleHorn2;
    }
    let glyphhorn = value + '+' + horn + '=' + local[0] + 'horn' + '.' + features;

    let kieu4 = glyphhorn;
    return kieu4;
};
let create_Dotlessi = (value, features, test) => {
    let dotlessi = '';
    let local = value.split('.');
    if (test == 1) {
        dotlessi = 'dotlessi' + '.' + local[1];
    } else if (test == 0) {
        dotlessi = styleDotlessi;
    }
    let glyphgrave = dotlessi + '+' + styleGrave1 + '=' + local[0] + 'grave' + '.' + features;
    let glyphacute = dotlessi + '+' + styleAcute1 + '=' + local[0] + 'acute' + '.' + features;
    let glyphtilde = dotlessi + '+' + styleTilde1 + '=' + local[0] + 'tilde' + '.' + features;
    let glyphhoi = dotlessi + '+' + styleHoi1 + '=' + local[0] + 'hoi' + '.' + features;
    let glyphnang = value + '+' + styleDot1 + '=' + local[0] + 'dotbelow' + '.' + features;
    let kieu5 = glyphgrave + '\r\n' + glyphacute + '\r\n' + glyphtilde + '\r\n' + glyphhoi + '\r\n' + glyphnang;
    return kieu5;
};

let style_Dcroat = (value, features) => {
    let local = value.split('.');
    let dcroat = '';
    if (local[0] == 'D') {
        dcroat = styleHyphen1;
    }
    if (local[0] == 'd') {
        dcroat = styleHyphen2;
    }
    let Dcroat = value + '+' + dcroat + '=' + local[0] + 'croat' + '.' + features;
    return Dcroat;
};
let make_Dotlessi = (value, features) => {
    local = value.split('.');
    Dotlessi = value + '=' + 'dotlessi' + '.' + features;
    return Dotlessi;
};

let single_Horn = (value, features) => {
    let local = value.split('.');
    let Horn = value + '=' + local[0] + 'horn' + '.' + features;
    return Horn;
};
let makeCode = () => {
    let CodeRender = '';
    if (arrCharacter.length > 1) {
        if (arr_D.length > 1) {
            arr_D.forEach((element) => {
                local = element.split('.');
                if (local[1] != null) {
                    CodeRender = CodeRender + style_Dcroat(element, local[1]);
                    CodeRender += '\r\n';
                    CodeRender += '\r\n';
                }
            });
        }
        if (arr_d.length > 1) {
            arr_d.forEach((element) => {
                local = element.split('.');
                if (local[1] != null) {
                    CodeRender = CodeRender + style_Dcroat(element, local[1]);
                    CodeRender += '\r\n';
                    CodeRender += '\r\n';
                }
            });
        }
        if (arr_A.length > 1) {
            arr_A.forEach((element) => {
                local = element.split('.');
                if (local[1] != null) {
                    CodeRender =
                        CodeRender +
                        style_Default(element, local[1]) +
                        '\r\n' +
                        style_Circumflex(element, local[1]) +
                        '\r\n' +
                        style_Breve(element, local[1]);
                    CodeRender += '\r\n';
                    CodeRender += '\r\n';
                }
            });
        }
        if (arr_E.length > 1) {
            arr_E.forEach((element) => {
                local = element.split('.');
                if (local[1] != null) {
                    CodeRender =
                        CodeRender + style_Default(element, local[1]) + '\r\n' + style_Circumflex(element, local[1]);
                    CodeRender += '\r\n';
                    CodeRender += '\r\n';
                }
            });
        }
        if (arr_I.length > 1) {
            arr_I.forEach((element) => {
                local = element.split('.');
                if (local[1] != null) {
                    CodeRender = CodeRender + style_Default(element, local[1]);
                    CodeRender += '\r\n';
                    CodeRender += '\r\n';
                }
            });
        }
        if (arr_O.length > 1) {
            arr_O.forEach((element) => {
                local = element.split('.');
                if (local[1] != null) {
                    let S = style_Default(element, local[1]) + '\r\n' + style_Circumflex(element, local[1]);
                    if (creatHorn === 'Cả Hai' || creatHorn.indexOf('Chữ Hoa') != -1) {
                        S = S + '\r\n' + style_Horn(element, local[1]);
                    }
                    CodeRender = CodeRender + S;
                    CodeRender += '\r\n';
                    CodeRender += '\r\n';
                }
            });
        }

        if (arr_Ohorn.length > 1) {
            arr_Ohorn.forEach((element) => {
                local = element.split('.');
                if (local[1] != null) {
                    CodeRender = CodeRender + style_Default(element, local[1]);
                    CodeRender += '\r\n';
                    CodeRender += '\r\n';
                }
            });
        }

        if (arr_U.length > 1) {
            arr_U.forEach((element) => {
                local = element.split('.');
                if (local[1] != null) {
                    let S = style_Default(element, local[1]);
                    if (creatHorn === 'Cả Hai' || creatHorn === 'Chữ Hoa') {
                        S = S + '\r\n' + style_Horn(element, local[1]);
                    }
                    CodeRender = CodeRender + S;
                    CodeRender += '\r\n';
                    CodeRender += '\r\n';
                }
            });
        }

        if (arr_Uhorn.length > 1) {
            arr_Uhorn.forEach((element) => {
                local = element.split('.');
                if (local[1] != null) {
                    CodeRender = CodeRender + style_Default(element, local[1]);
                    CodeRender += '\r\n';
                    CodeRender += '\r\n';
                }
            });
        }

        if (arr_Y.length > 1) {
            arr_Y.forEach((element) => {
                local = element.split('.');
                if (local[1] != null) {
                    CodeRender = CodeRender + style_Default(element, local[1]);
                    CodeRender += '\r\n';
                    CodeRender += '\r\n';
                }
            });
        }

        if (arr_a.length > 1) {
            arr_a.forEach((element) => {
                local = element.split('.');
                if (local[1] != null) {
                    CodeRender =
                        CodeRender +
                        style_Default(element, local[1]) +
                        '\r\n' +
                        style_Circumflex(element, local[1]) +
                        '\r\n' +
                        style_Breve(element, local[1]);
                    CodeRender += '\r\n';
                    CodeRender += '\r\n';
                }
            });
        }
        if (arr_e.length > 1) {
            arr_e.forEach((element) => {
                local = element.split('.');
                if (local[1] != null) {
                    CodeRender =
                        CodeRender + style_Default(element, local[1]) + '\r\n' + style_Circumflex(element, local[1]);
                    CodeRender += '\r\n';
                    CodeRender += '\r\n';
                }
            });
        }
        if (arr_i.length > 1) {
            arr_i.forEach((element) => {
                local = element.split('.');
                if (local[1] != null) {
                    CodeRender = CodeRender + create_Dotlessi(element, local[1], 1);
                    CodeRender += '\r\n';
                    CodeRender += '\r\n';
                }
            });
        }
        if (arr_o.length > 1) {
            arr_o.forEach((element) => {
                local = element.split('.');
                if (local[1] != null) {
                    let S = style_Default(element, local[1]) + '\r\n' + style_Circumflex(element, local[1]);
                    if (creatHorn === 'Cả Hai' || creatHorn.indexOf('Chữ Thường') != -1) {
                        S = S + '\r\n' + style_Horn(element, local[1]);
                    }
                    CodeRender = CodeRender + S;
                    CodeRender += '\r\n';
                    CodeRender += '\r\n';
                }
            });
        }

        if (arr_ohorn.length > 1) {
            arr_ohorn.forEach((element) => {
                local = element.split('.');
                if (local[1] != null) {
                    CodeRender = CodeRender + style_Default(element, local[1]);
                    CodeRender += '\r\n';
                    CodeRender += '\r\n';
                }
            });
        }

        if (arr_u.length > 1) {
            arr_u.forEach((element) => {
                local = element.split('.');
                if (local[1] != null) {
                    let S = style_Default(element, local[1]);
                    if (creatHorn === 'Cả Hai' || creatHorn === 'Chữ Thường') {
                        S = S + '\r\n' + style_Horn(element, local[1]);
                    }
                    CodeRender = CodeRender + S;
                    CodeRender += '\r\n';
                    CodeRender += '\r\n';
                }
            });
        }

        if (arr_uhorn.length > 1) {
            arr_uhorn.forEach((element) => {
                local = element.split('.');
                if (local[1] != null) {
                    CodeRender = CodeRender + style_Default(element, local[1]);
                    CodeRender += '\r\n';
                    CodeRender += '\r\n';
                }
            });
        }

        if (arr_y.length > 1) {
            arr_y.forEach((element) => {
                local = element.split('.');
                if (local[1] != null) {
                    CodeRender = CodeRender + style_Default(element, local[1]);
                    CodeRender += '\r\n';
                    CodeRender += '\r\n';
                }
            });
        }
    } else if (arrCharacter.length == 1) {
        let singleGlyph = arrCharacter[0].split('.');
        if (singleGlyph.length > 1) {
            if (styleCharater == 'A') {
                CodeRender +=
                    style_Default(arrCharacter[0], styleFeatures) +
                    '\r\n' +
                    style_Circumflex(arrCharacter[0], styleFeatures) +
                    '\r\n' +
                    style_Breve(arrCharacter[0], styleFeatures);
            }
            if (styleCharater == 'E') {
                CodeRender +=
                    style_Default(arrCharacter[0], styleFeatures) +
                    '\r\n' +
                    style_Circumflex(arrCharacter[0], styleFeatures);
            }
            if (styleCharater == 'I') {
                CodeRender += style_Default(arrCharacter[0], styleFeatures);
            }
            if (styleCharater == 'O') {
                CodeRender +=
                    style_Default(arrCharacter[0], styleFeatures) +
                    '\r\n' +
                    style_Circumflex(arrCharacter[0], styleFeatures);
                CodeRender = CodeRender + '\r\n' + style_Horn(arrCharacter[0], styleFeatures);
            }
            if (styleCharater == 'U') {
                CodeRender += style_Default(arrCharacter[0], styleFeatures);
                CodeRender = CodeRender + '\r\n' + style_Horn(arrCharacter[0], styleFeatures);
            }
            if (styleCharater == 'Y') {
                CodeRender += style_Default(arrCharacter[0], arrCharacter[0]);
            }
            if (styleCharater == 'i') {
                CodeRender += create_Dotlessi(arrCharacter[0], arrCharacter[0], 0);
            }
            if (styleCharater == 'Ư,Ơ') {
                CodeRender += style_Default(arrCharacter[0], arrCharacter[0]);
            }
            if (styleCharater == 'D,d') {
                CodeRender += style_Dcroat(arrCharacter[0], arrCharacter[0]);
            }
        }
    }
    return CodeRender;
};
let RenderCreateDotlessi = () => {
    beginStart();
    let CodeRender = '';
    arr_i.forEach((element) => {
        local = element.split('.');
        if (local[1] != null) {
            CodeRender += make_Dotlessi(element, local[1]);
            CodeRender += '\r\n';
            CodeRender += '\r\n';
        }
    });
    createCode.value = CodeRender;
};
let filterGlyphs = () => {
    beginStart();
    let CodeRender = '';
    if (arrCharacter.length > 1) {
        if (arr_D.length > 1) {
            arr_D.forEach((element) => {
                CodeRender += element + '/';
                local = element.split('.');
                arr_Dcroat.forEach((element2) => {
                    local2 = element2.split('.');
                    if (local[1] === local2[1]) {
                        CodeRender += element2 + '/';
                    }
                });
            });
            CodeRender += '\r\n';
        }

        if (arr_Dcroat.length > 1) {
            arr_Dcroat.forEach((element) => {
                CodeRender += element + '/';
            });
            CodeRender += '\r\n';
        }

        if (arr_d.length > 1) {
            arr_d.forEach((element) => {
                CodeRender += element + '/';
                local = element.split('.');
                arr_dcroat.forEach((element2) => {
                    local2 = element2.split('.');
                    if (local[1] === local2[1]) {
                        CodeRender += element2 + '/';
                    }
                });
            });
            CodeRender += '\r\n';
        }

        if (arr_dcroat.length > 1) {
            arr_dcroat.forEach((element) => {
                CodeRender += element + '/';
            });
            CodeRender += '\r\n';
        }

        if (arr_A.length > 1) {
            arr_A.forEach((element) => {
                CodeRender += element + '/';
            });
            CodeRender += '\r\n';
        }
        if (arr_E.length > 1) {
            arr_E.forEach((element) => {
                CodeRender += element + '/';
            });
            CodeRender += '\r\n';
        }
        if (arr_I.length > 1) {
            arr_I.forEach((element) => {
                CodeRender += element + '/';
            });
            CodeRender += '\r\n';
        }
        if (arr_O.length > 1) {
            arr_O.forEach((element) => {
                CodeRender += element + '/';
                local = element.split('.');
                arr_Ohorn.forEach((element2) => {
                    local2 = element2.split('.');
                    if (local[1] === local2[1]) {
                        CodeRender += element2 + '/';
                    }
                });
            });
            CodeRender += '\r\n';
        }

        if (arr_Ohorn.length > 1) {
            arr_Ohorn.forEach((element) => {
                CodeRender += element + '/';
            });
            CodeRender += '\r\n';
        }

        if (arr_U.length > 1) {
            arr_U.forEach((element) => {
                CodeRender += element + '/';
                local = element.split('.');
                arr_Uhorn.forEach((element2) => {
                    local2 = element2.split('.');
                    if (local[1] === local2[1]) {
                        CodeRender += element2 + '/';
                    }
                });
            });
            CodeRender += '\r\n';
        }

        if (arr_Uhorn.length > 1) {
            arr_Uhorn.forEach((element) => {
                CodeRender += element + '/';
            });
            CodeRender += '\r\n';
        }

        if (arr_Y.length > 1) {
            arr_Y.forEach((element) => {
                CodeRender += element + '/';
            });
            CodeRender += '\r\n';
        }

        if (arr_a.length > 1) {
            arr_a.forEach((element) => {
                CodeRender += element + '/';
            });
            CodeRender += '\r\n';
        }
        if (arr_e.length > 1) {
            arr_e.forEach((element) => {
                CodeRender += element + '/';
            });
            CodeRender += '\r\n';
        }
        if (arr_i.length > 1) {
            arr_i.forEach((element) => {
                CodeRender += element + '/';
                local = element.split('.');
                arr_dotlessi.forEach((element2) => {
                    local2 = element2.split('.');
                    if (local[1] === local2[1]) {
                        CodeRender += element2 + '/';
                    }
                });
            });
            CodeRender += '\r\n';
        }

        if (arr_dotlessi.length > 1) {
            arr_dotlessi.forEach((element) => {
                CodeRender += element + '/';
            });
            CodeRender += '\r\n';
        }

        if (arr_o.length > 1) {
            arr_o.forEach((element) => {
                CodeRender += element + '/';
                local = element.split('.');
                arr_ohorn.forEach((element2) => {
                    local2 = element2.split('.');
                    if (local[1] === local2[1]) {
                        CodeRender += element2 + '/';
                    }
                });
            });
            CodeRender += '\r\n';
        }

        if (arr_ohorn.length > 1) {
            arr_ohorn.forEach((element) => {
                CodeRender += element + '/';
            });
            CodeRender += '\r\n';
        }

        if (arr_u.length > 1) {
            arr_u.forEach((element) => {
                CodeRender += element + '/';
                local = element.split('.');
                arr_uhorn.forEach((element2) => {
                    local2 = element2.split('.');
                    if (local[1] === local2[1]) {
                        CodeRender += element2 + '/';
                    }
                });
            });
            CodeRender += '\r\n';
        }

        if (arr_uhorn.length > 1) {
            arr_uhorn.forEach((element) => {
                CodeRender += element + '/';
            });
            CodeRender += '\r\n';
        }

        if (arr_y.length > 1) {
            arr_y.forEach((element) => {
                CodeRender += element + '/';
            });
            CodeRender += '\r\n';
        }
        createCode.value = CodeRender;
    }
};

let createHornRender = () => {
    let CodeRender = '';
    beginStart();
    Swal.fire({
        title: 'Tạo dấu Horn hay không ?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Có',
        denyButtonText: `Không`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            if (arr_O.length > 1) {
                arr_O.forEach((element) => {
                    let local = element.split('.');

                    if (local[1] != null) {
                        CodeRender += make_Horn(element, local[1]);
                        CodeRender += '\r\n';
                        CodeRender += '\r\n';
                    }
                });
                CodeRender += '\r\n';
            }

            if (arr_U.length > 1) {
                arr_U.forEach((element) => {
                    let local = element.split('.');

                    if (local[1] != null) {
                        CodeRender += make_Horn(element, local[1]);
                        CodeRender += '\r\n';
                        CodeRender += '\r\n';
                    }
                });
                CodeRender += '\r\n';
            }

            if (arr_o.length > 1) {
                arr_o.forEach((element) => {
                    let local = element.split('.');
                    if (local[1] != null) {
                        CodeRender += make_Horn(element, local[1]);
                        CodeRender += '\r\n';
                        CodeRender += '\r\n';
                    }
                });
                CodeRender += '\r\n';
            }
            if (arr_u.length > 1) {
                arr_u.forEach((element) => {
                    let local = element.split('.');
                    if (local[1] != null) {
                        CodeRender += make_Horn(element, local[1]);
                        CodeRender += '\r\n';
                        CodeRender += '\r\n';
                    }
                });
                CodeRender += '\r\n';
            }
            createCode.value = CodeRender;
        } else if (result.isDenied) {
            if (arr_O.length > 1) {
                arr_O.forEach((element) => {
                    let local = element.split('.');
                    if (local[1] != null) {
                        CodeRender += single_Horn(element, local[1]);
                        CodeRender += '\r\n';
                        CodeRender += '\r\n';
                    }
                });
                CodeRender += '\r\n';
            }
            if (arr_U.length > 1) {
                arr_U.forEach((element) => {
                    let local = element.split('.');
                    if (local[1] != null) {
                        CodeRender += single_Horn(element, local[1]);
                        CodeRender += '\r\n';
                        CodeRender += '\r\n';
                    }
                });
                CodeRender += '\r\n';
            }
            if (arr_o.length > 1) {
                arr_o.forEach((element) => {
                    let local = element.split('.');
                    if (local[1] != null) {
                        CodeRender += single_Horn(element, local[1]);
                        CodeRender += '\r\n';
                        CodeRender += '\r\n';
                    }
                });
                CodeRender += '\r\n';
            }
            if (arr_u.length > 1) {
                arr_u.forEach((element) => {
                    let local = element.split('.');
                    if (local[1] != null) {
                        CodeRender += single_Horn(element, local[1]);
                        CodeRender += '\r\n';
                        CodeRender += '\r\n';
                    }
                });
                CodeRender += '\r\n';
            }
        }
        createCode.value = CodeRender;
    });
};
let copyToClip = () => {
    navigator.clipboard.writeText(createCode.value);
    Swal.fire('Đã copy!', '', 'success');
};
let resetTextArea = () => {
    createCode.value = '';
    document.getElementById('inputGlyphs').value = '';
};
let removeData = () => {
    arr_A = ['A'];
    arr_E = ['E'];
    arr_I = ['I'];
    arr_O = ['O'];
    arr_U = ['U'];
    arr_Y = ['Y'];
    arr_Dcroat = ['Dcroat'];
    arr_D = ['D'];
    arr_Ohorn = ['Ohorn'];
    arr_Uhorn = ['Uhorn'];
    arr_a = ['a'];
    arr_e = ['e'];
    arr_i = ['i'];
    arr_o = ['o'];
    arr_u = ['u'];
    arr_y = ['y'];
    arr_d = ['d'];
    arr_dcroat = ['dcroat'];
    arr_ohorn = ['ohorn'];
    arr_uhorn = ['uhorn'];
    arr_dotlessi = ['dotlessi'];
};
