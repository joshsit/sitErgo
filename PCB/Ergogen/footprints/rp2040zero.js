module.exports = {
    params: {
        designator: 'MCU',
        side: 'F',
        orientation: 'up',
        P0: { type: 'net', value: 'P0' },
        P1: { type: 'net', value: 'P1' },
        P2: { type: 'net', value: 'P2' },
        P3: { type: 'net', value: 'P3' },
        P4: { type: 'net', value: 'P4' },
        P5: { type: 'net', value: 'P5' },
        P6: { type: 'net', value: 'P6' },
        P7: { type: 'net', value: 'P7' },
        P8: { type: 'net', value: 'P8' },
        P9: { type: 'net', value: 'P9' },
        P10: { type: 'net', value: 'P10' },
        P11: { type: 'net', value: 'P11' },
        P12: { type: 'net', value: 'P12' },
        P13: { type: 'net', value: 'P13' },
        P14: { type: 'net', value: 'P14' },
        P15: { type: 'net', value: 'P15' },
        P26: { type: 'net', value: 'P26' },
        P27: { type: 'net', value: 'P27' },
        P28: { type: 'net', value: 'P28' },
        P29: { type: 'net', value: 'P29' },
        V3: { type: 'net', value: '3V3' },
        GND: { type: 'net', value: 'GND' },
        V5: { type: 'net', value: '5V' }
        
    },
    body: p => {
        const standard = `
            (module RP2040_Zero (layer ${p.side}.Cu) (tstamp 1c479411-a194-4685-8eeb-e81966c16c7f)
                ${p.at /* parametric position */}
                (fp_text reference "${p.ref}" (at 0 -1.4 ${p.r}) (layer ${p.side}.SilkS) ${p.ref_hide} hide (effects (font (size 0.889 0.889) (thickness 0.1016))))
                (fp_text value "RP2040_Zero" (at 0 0 ${p.r}) (layer ${p.side}.SilkS) hide (effects (font (size 0.6096 0.6096) (thickness 0.0762))))
                (fp_text user "Footprint" (at 0 0 ${p.r}) (layer F.Fab) hide (effects (font (size 1.27 1.27))))
                (fp_text user "Datasheet" (at 0 0 ${p.r}) (layer F.Fab) hide (effects (font (size 1.27 1.27))))
                (fp_text user "Description" (at 0 0 ${p.r}) (layer F.Fab) hide (effects (font (size 1.27 1.27))))
                (fp_rect (start -9 -11.75) (end 9 11.75) (layer Dwgs.User) (width 0.12) (fill none))
        `;
        
        function pins(def_neg, def_pos) {
            return `
                ${'' /* right side pins (1-9) and labels */}
                
                (pad 1 thru_hole oval (at 7.62 ${def_pos}10.16 ${p.r + 180}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P0.str})
                (fp_text user 0 (at 10.5 ${def_pos}10.16 ${p.r + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12))))
                (fp_text user 0 (at 10.5 ${def_pos}10.16 ${p.r + 0}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12)) (justify mirror)))
                
                (pad 2 thru_hole oval (at 7.62 ${def_pos}7.62 ${p.r + 180}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P1.str})
                (fp_text user 1 (at 10.5 ${def_pos}7.62 ${p.r + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12))))
                (fp_text user 1 (at 10.5 ${def_pos}7.62 ${p.r + 0}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12)) (justify mirror)))
                
                (pad 3 thru_hole oval (at 7.62 ${def_pos}5.08 ${p.r + 180}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P2.str})
                (fp_text user 2 (at 10.5 ${def_pos}5.08 ${p.r + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12))))
                (fp_text user 2 (at 10.5 ${def_pos}5.08 ${p.r + 0}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12)) (justify mirror)))
                
                (pad 4 thru_hole oval (at 7.62 ${def_pos}2.54 ${p.r + 180}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P3.str})
                (fp_text user 3 (at 10.5 ${def_pos}2.54 ${p.r + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12))))
                (fp_text user 3 (at 10.5 ${def_pos}2.54 ${p.r + 0}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12)) (justify mirror)))
                
                (pad 5 thru_hole oval (at 7.62 ${def_pos}0 ${p.r + 180}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P4.str})
                (fp_text user 4 (at 10.5 ${def_pos}0 ${p.r + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12))))
                (fp_text user 4 (at 10.5 ${def_pos}0 ${p.r + 0}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12)) (justify mirror)))
                
                (pad 6 thru_hole oval (at 7.62 ${def_neg}2.54 ${p.r + 180}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P5.str})
                (fp_text user 5 (at 10.5 ${def_neg}2.54 ${p.r + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12))))
                (fp_text user 5 (at 10.5 ${def_neg}2.54 ${p.r + 0}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12)) (justify mirror)))
                
                (pad 7 thru_hole oval (at 7.62 ${def_neg}5.08 ${p.r + 180}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P6.str})
                (fp_text user 6 (at 10.5 ${def_neg}5.08 ${p.r + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12))))
                (fp_text user 6 (at 10.5 ${def_neg}5.08 ${p.r + 0}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12)) (justify mirror)))
                
                (pad 8 thru_hole oval (at 7.62 ${def_neg}7.62 ${p.r + 180}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P7.str})
                (fp_text user 7 (at 10.5 ${def_neg}7.62 ${p.r + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12))))
                (fp_text user 7 (at 10.5 ${def_neg}7.62 ${p.r + 0}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12)) (justify mirror)))
                
                (pad 9 thru_hole oval (at 7.62 ${def_neg}10.16 ${p.r + 180}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P8.str})
                (fp_text user 8 (at 10.5 ${def_neg}10.16 ${p.r + 180}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12))))
                (fp_text user 8 (at 10.5 ${def_neg}10.16 ${p.r + 0}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12)) (justify mirror)))
                

                ${'' /* top pins (10-14) and labels */}
                (pad 10 thru_hole oval (at 5.08 ${def_neg}10.16 ${p.r + 90}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P9.str})
                (fp_text user 9 (at 5.08 ${def_neg}13.0 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12))))
                (fp_text user 9 (at 5.08 ${def_neg}13.0 ${p.r + 270}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12)) (justify mirror)))
                
                (pad 11 thru_hole oval (at 2.54 ${def_neg}10.16 ${p.r + 90}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P10.str})
                (fp_text user 10 (at 2.54 ${def_neg}13.0 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12))))
                (fp_text user 10 (at 2.54 ${def_neg}13.0 ${p.r + 270}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12)) (justify mirror)))
                
                (pad 12 thru_hole oval (at 0 ${def_neg}10.16 ${p.r + 90}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P11.str})
                (fp_text user 11 (at 0 ${def_neg}13.0 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12))))
                (fp_text user 11 (at 0 ${def_neg}13.0 ${p.r + 270}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12)) (justify mirror)))
                
                (pad 13 thru_hole oval (at -2.54 ${def_neg}10.16 ${p.r + 90}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P12.str})
                (fp_text user 12 (at -2.54 ${def_neg}13.0 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12))))
                (fp_text user 12 (at -2.54 ${def_neg}13.0 ${p.r + 270}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12)) (justify mirror)))
                
                (pad 14 thru_hole oval (at -5.08 ${def_neg}10.16 ${p.r + 90}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P13.str})
                (fp_text user 13 (at -5.08 ${def_neg}13.0 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12))))
                (fp_text user 13 (at -5.08 ${def_neg}13.0 ${p.r + 270}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12)) (justify mirror)))

                ${'' /* left side pins (15-23) and labels */}
                (pad 15 thru_hole oval (at -7.62 ${def_neg}10.16 ${p.r}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P14.str})
                (fp_text user 14 (at -10.5 ${def_neg}10.16 ${p.r + 0}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12))))
                (fp_text user 14 (at -10.5 ${def_neg}10.16 ${p.r + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12)) (justify mirror)))
                
                (pad 16 thru_hole oval (at -7.62 ${def_neg}7.62 ${p.r}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P15.str})
                (fp_text user 15 (at -10.5 ${def_neg}7.62 ${p.r + 0}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12))))
                (fp_text user 15 (at -10.5 ${def_neg}7.62 ${p.r + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12)) (justify mirror)))
                
                (pad 17 thru_hole oval (at -7.62 ${def_neg}5.08 ${p.r}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P26.str})
                (fp_text user 26 (at -10.5 ${def_neg}5.08 ${p.r + 0}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12))))
                (fp_text user 26 (at -10.5 ${def_neg}5.08 ${p.r + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12)) (justify mirror)))
                
                (pad 18 thru_hole oval (at -7.62 ${def_neg}2.54 ${p.r}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P27.str})
                (fp_text user 27 (at -10.5 ${def_neg}2.54 ${p.r + 0}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12))))
                (fp_text user 27 (at -10.5 ${def_neg}2.54 ${p.r + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12)) (justify mirror)))
                
                (pad 19 thru_hole oval (at -7.62 ${def_neg}0 ${p.r}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P28.str})
                (fp_text user 28 (at -10.5 ${def_neg}0 ${p.r + 0}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12))))
                (fp_text user 28 (at -10.5 ${def_neg}0 ${p.r + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12)) (justify mirror)))
                
                (pad 20 thru_hole oval (at -7.62 ${def_pos}2.54 ${p.r}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P29.str})
                (fp_text user 29 (at -10.5 ${def_pos}2.54 ${p.r + 0}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12))))
                (fp_text user 29 (at -10.5 ${def_pos}2.54 ${p.r + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12)) (justify mirror)))
                
                (pad 21 thru_hole oval (at -7.62 ${def_pos}5.08 ${p.r}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.V3.str})
                (fp_text user 3V3 (at -11 ${def_pos}5.08 ${p.r + 0}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12))))
                (fp_text user 3V3 (at -11 ${def_pos}5.08 ${p.r + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12)) (justify mirror)))
                
                (pad 22 thru_hole oval (at -7.62 ${def_pos}7.62 ${p.r}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.GND.str})
                (fp_text user GND (at -11 ${def_pos}7.62 ${p.r + 0}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12))))
                (fp_text user GND (at -11 ${def_pos}7.62 ${p.r + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12)) (justify mirror)))
                
                (pad 23 thru_hole oval (at -7.62 ${def_pos}10.16 ${p.r}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.V5.str})
                (fp_text user 5V (at -10.5 ${def_pos}10.16 ${p.r + 0}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12))))
                (fp_text user 5V (at -10.5 ${def_pos}10.16 ${p.r + 180}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.12)) (justify mirror)))
            `;
        }

        return p.orientation == 'down' ? `${standard}${pins('-', '')})` : `${standard}${pins('', '-')})`;
    }
}