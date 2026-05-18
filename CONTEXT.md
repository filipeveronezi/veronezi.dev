# Context

## Glossary

- **Scroll-scrubbed animation**: Visual state follows scroll position. Scrolling backward reverses the same animation.
- **Scroll gesture trigger**: Scroll input is interpreted as a discrete intent to advance or reverse one resting point, rather than as continuous visual progress.
- **Pinned stage**: Viewport-sized presentation area that stays visually fixed while scroll progress advances the scene.
- **Progress timeline**: Continuous animation model where cards stay mounted and derive transforms from scroll progress.
- **Virtual stack position**: A card's derived position in the pile after subtracting scroll-driven active progress from its original order.
- **Card index**: A card's stable identity position in the source list.
- **Slot**: A card's current relative position in the visible pile.
- **Mimic header**: Existing writing header/meta remains visible around mimic pages unless a route explicitly opts out.
- **Cyclic pile**: Card stack where moving past the last card brings the first card back to the top.
- **Teaching scaffold**: Intentionally incomplete demo used to explain one idea before showing the final behavior.
- **Tweaking details**: Final animation tuning pass for secondary transforms such as x offset, vertical hiding, rotation, opacity, and spring feel.
- **Demo container**: Shared article wrapper for interactive examples, providing consistent spacing, border, background, and overflow behavior.
- **Simplified snippet**: Short code example that isolates one concept instead of reproducing the full production component.
- **Build note**: First-person explanation of the thinking behind an implementation, not a neutral API tutorial.

## Mimic Details

Mimic details pages are build notes. They explain the final approach in first person, using incomplete teaching scaffolds only when they make the final idea easier to understand.

Write sections concept first, code second, demo third. Use simplified snippets for isolated ideas, and reserve full implementation excerpts for moments where exact values matter.

Use interactive demos purposefully. Demos should clarify a specific concept, usually through buttons, sliders, or self-running animation instead of nested wheel capture.

For disposable cards, center the explanation on the difference between card index and slot. Other ideas, such as scroll input, wrapping, snapping, and animation tuning, should support that mental model.
