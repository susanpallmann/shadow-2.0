# unnamed-game

**Version: 0.3.0**

Description to come eventually ¯\\\_(ツ)\_/¯

*It has been **8** days since a typo broke everything. 5 of those days I was on vacation.* 

### Contents

* [Development Diary](#development-diary)
* [Planned Mechanics](#planned-mechanics)
* [Documentation](#documentation)

## Development Diary
- [x] Follow basic platformer tutorial to completion - *0.2.0*
- [x] Update player art - *0.2.1*
- [x] Experiment by adding "water" - *0.2.2*
- [X] Make a "coin" that gives the player a shark fin and faster swimming - *0.3.0*
  - [x] Draw shark back sprite
  - [X] Adapt DOM player creation function to have a "back slot" that lines up correctly
  - [X] Adapt Player class to have a new tracker for slots (maybe as an array)
  - [X] Adapt DOM player creation function to display the correct back slot
  - [X] When player collides with the coin, change the player's back slot
  - [X] When player has shark back, make player swim faster
- [ ] Rework level creation to use both a block map (physics) and a sprite map (visuals) - *in progress*
- [ ] Change from gifs to a spritemap and animating with time/steps rendering
- [ ] Create first monster

## Planned Mechanics

### Learnable Adaptations

#### Not assigned

#### If feasible
- fly?


#### Head
Ability           | Appearance
------------------|-------------------
increased attack  |bull horns
increased attack  |rhinoceros horn
increased breath  |shark gills
fire breath       |lizard head
tongue attack     |frog head
glow              |angler fish antenna

#### Body
- increased defense
  - rhino skin
- increased inventory
  - kangaroo pouch
- does damage when attacked
  - poison dart frog skin
- invisibility (no aggro from monsters)
  - squid skin

#### Back
- increased swimming speed
  - shark fin
- increased defense
  - hermit crab shell
  - turtle shell
- increased inventory
  - camel hump
- reduced fall damage
  - hermit crab shell
  - turtle shell
- does damage when attacked
  - porcupine spines
  - lionfish spines

#### Arms
- increased swimming speed
  - lionfish fins
- increased break strength
  - lobster claws
- climb walls
  - squid arms

#### Legs
- decreased walking speed
  - sloth legs
- decreased jump height
  - sloth legs
- increased walking speed
  - cheetah legs
  - deer legs
- increased jump height
  - frog legs
  - kangaroo legs
- increased swimming speed
  - dolphin tail
- climb walls
  - lobster legs
- climb ceilings
  - lobster legs
- ink attack
  - squid legs

## Documentation

### Map Creation
Coming soon
