# Compact Ergonomic Mechanical Keyboard (sitErgo)

A custom-designed, compact mechanical keyboard prototype focused on ergonomics, portability, and efficient typing.  
Developed as an independent engineering project exploring human factors, mechanical design, and open-source firmware customization.

<img width="821" height="432" alt="image" src="https://github.com/user-attachments/assets/53096477-cf5f-46dc-8823-95ca24656a4d" />
  
*Prototype v1 of the sitErgo Keyboard*

---

## Motivation & Background
Most mainstream keyboards follow a legacy layout that can contribute to poor posture, finger strain, and inefficiency.  
This project explores an alternative design: a **compact, column-staggered, ergonomic mechanical keyboard** that balances usability with portability.  
Inspired by enthusiast boards like the **Corne, Atreus, and Alice layouts**, this keyboard experiments with features such as:
- Columnar stagger for natural finger alignment  
- Inverted-V orientation to reduce ulnar deviation (wrist bending outward)  
- Support for alternative typing layouts (e.g., **Colemak-DH**)  
- Compact footprint for travel and desk efficiency  

---

## Features
- **Compact 40% layout** (fewer keys, layered functionality)  
- **Column-staggered design** for improved finger ergonomics  
- **Inverted-V orientation** for reduced ulnar deviation  
- **Open-source QMK firmware** with customizable layers, macros, and mouse keys  
- **Hot-swappable switches** for customizability  

---

## Bill of Materials (Prototype v1)
| Component                  | Example Part / Source          | Cost (Approx.) |
|----------------------------|--------------------------------|----------------|
| PCB (custom)               | JLCPCB fabrication             | <$5            |
| Microcontroller            | RP2040-Zero                    | <$5            |
| Key switches (x36)         | Akko Pro v3 mx switches        | $10            |
| Keycaps (blank, x36)       | Generic MOA profile keycaps    | $10            |
| Diodes (1N4148, x36)       | Generic, through-hole          | <$5            |
| Case / Plate (prototype)   | 3D printed PLA+                | <$5            |
| Misc. (fasteners, etc.)    | —                              | <$5            |
| **Total**                  | —                              | ~$30           |

*(Costs vary depending on sourcing and materials; BOM provided for reference.)*

---

## Challenges & Lessons Learned
- Balancing **ergonomics vs. portability** (trade-offs between tenting, size, and bulk)  
- PCB design iteration for **diode placement and routing**  
- Firmware learning curve with **QMK keymap customization**  
- Adapting to alternative typing layouts (Colemak-DH)  

---

## Firmware & Layout
The keyboard runs on **QMK firmware**, allowing full customization of:  
- Layered layouts (base, function, navigation, numpad)  
- Mouse keys and media controls  
- Macros for coding/productivity  
- Support for **Colemak-DH** and standard layouts  

👉 See [firmware/](firmware) for keymaps, layout diagrams, and config files.  

---

## Future Work
- Refined PCB & plate design for durability  
- Case redesign for aesthetics + portability  
- Wireless (Bluetooth) support in future iterations  
- Broader keycap compatibility testing  

---

## Documentation
- 📄 [Full Project Report](docs/REPORT.md) *(detailed write-up with design considerations, market research, and lessons learned)*  
- 📷 [More Images](images/)  
- ⌨️ [Firmware & Keymaps](firmware/)  

---

## License
MIT License – open for hobbyist use and modification.  
