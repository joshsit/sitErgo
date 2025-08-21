Development of a Compact Ergonomic Mechanical Keyboard

Author: Joshua Sit

1. Introduction

Keyboards are the primary human–computer interface for professionals, students, and hobbyists alike. While mass-produced keyboards have remained relatively unchanged for decades, there has been a growing movement in the DIY mechanical keyboard community toward exploring new layouts, ergonomic considerations, and customization.

This report documents the design and prototyping of a series of compact ergonomic mechanical keyboards developed in my personal time. The goal is to combine ergonomic typing principles with portability and customizability, filling a gap between bulky ergonomic keyboards (often unsuited for mobile use) and ultracompact keyboards (which often sacrifice comfort).

2. Background: Keyboards and Ergonomics
2.1 Standard Keyboards

Most commercial keyboards are based on the IBM Model M (1985) layout, which established:

Row staggered keys (designed for typewriter mechanics, not ergonomics).

104+ key full layouts with a number pad, function row, and arrows.

Price range: $20–$150 (e.g., Logitech K120, Dell KB216, Razer Huntsman).

While familiar, these designs often promote wrist extension, ulnar deviation, and shoulder strain during prolonged use.

2.2 Ergonomic Keyboards

Mainstream ergonomic keyboards aim to reduce strain through split layouts, tenting, or wrist support. Examples include:

Microsoft Sculpt (~$130 CAD) – domed split design with tenting.

Kinesis Advantage 2 (~$500 CAD) – concave key wells with thumb clusters.

Logitech Ergo K860 (~$150 CAD) – curved split with tenting.

However, many are large and desk-bound, limiting portability.

2.3 Enthusiast Ergonomic Keyboards

The mechanical keyboard community has pushed innovation with compact and ergonomic designs:

Corne (CRKBD) – a 40% split keyboard with column stagger and thumb clusters.

ErgoDox EZ – a larger but highly customizable split ergonomic board.

Planck – a 40% ortholinear (grid-aligned) board focused on minimalism.

Atreus – portable ergonomic board with a curved column layout.

These designs inspired my own work, but I found existing options either too bulky or too specialized. My aim was to create a portable, flat, ergonomic keyboard optimized for typing comfort while retaining simplicity in form factor.

3. Design Considerations
3.1 Column Stagger vs. Row Stagger

Row stagger (standard keyboards): Keys shift sideways row by row, inherited from typewriters.

Column stagger: Keys aligned in vertical columns (more natural for finger movement).

Diagram suggestion: side-by-side key layout comparison.

3.2 Inverted-V Orientation for Ulnar Deviation

Standard boards force the wrists outward (ulnar deviation).

My design rotates each half of the board slightly outward in an inverted-V shape to keep wrists straight.

Unlike tenting, the board remains flat for portability.

Diagram: flat board vs. inverted-V orientation vs. tented board.

3.3 Compact Layouts and Colemak-DH

Traditional QWERTY layout is inefficient in finger movement.

Colemak-DH reduces lateral finger motion, placing common keys under stronger fingers.

Compact layouts (40–60%) trade function row/num pad for layers and macros.

Software (QMK) enables layer switching, macros, and mouse keys to cover lost physical keys.

4. Bill of Materials (Prototype v1 Example)
Component	Specification / Example	Quantity	Approx. Cost (CAD)	Notes
Microcontroller	Pro Micro (ATmega32u4) or Elite-C	1	$15–25	USB-C preferred
Key Switches	Kailh Choc V1 low profile (tactile)	42–48	$25–40	Ergonomic feel, portability
Keycaps	Low-profile PBT or MBK keycaps	42–48	$30–50	Compact profile
PCB	Custom-fabricated (JLCPCB)	1	$10–20	Ordered via fab house
Diodes	1N4148 through-hole	42–48	$2–5	Required for matrix wiring
Case / Plate	Acrylic or 3D-printed PLA	1	$10–30	Flat, portable
Misc Hardware	Screws, standoffs, USB cable	—	$5–10	Assembly
Total (est.)		—	~$120–180	Comparable to budget ergo boards

This BOM highlights that a DIY ergonomic keyboard can be produced at a competitive cost compared to commercial options, while enabling complete customization.

5. Firmware and Layout (QMK)

The DIY keyboard ecosystem is empowered by open-source firmware, most notably QMK (Quantum Mechanical Keyboard). QMK enables:

Custom keymaps (QWERTY, Colemak-DH, Dvorak, etc.).

Layers – additional virtual layouts accessed via modifier keys.

Macros – automated sequences of keystrokes.

Mouse keys – cursor control via keyboard.

Tap vs. Hold functions – one key can act differently when tapped vs. held.

In my design, I implemented [section for Joshua to expand on specifics: e.g., Colemak-DH layers, unique macros, thumb keys, mouse emulation, etc.].

6. Challenges and Lessons Learned

PCB design complexity – Routing diode matrices and USB-C compatibility.

Switch availability – Balancing low-profile portability vs. typing comfort.

Firmware tuning – Adjusting keymap timing (e.g., debounce, tap-hold delay).

Cost vs. scalability – Small-batch fabrication drives cost higher than mass production.

Key lessons: iteration is essential, open-source resources (QMK, KiCad, community forums) accelerate development, and ergonomics requires balancing theory with user testing.

7. Future Work

Iterating PCB design for hot-swap switch sockets.

Exploring wireless options (BLE) for portability.

Investigating different thumb cluster designs.

Refining firmware with adaptive layers and per-app macros.

Publishing design files and build guides for community feedback.

8. Conclusion

This project represents a personal exploration into human-centered hardware design, merging mechanical engineering, ergonomics, and open-source firmware. By documenting the design motivations, challenges, and technical details, I aim to contribute to both my professional portfolio and the broader DIY keyboard community.