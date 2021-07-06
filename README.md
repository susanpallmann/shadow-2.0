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
The core concept of the game is that the player, by spending time near monsters 
and creatures in the game, can gain adaptations or traits from these monsters.
The player then uses these adaptations - things like faster swimming or higher
jumping ability - to navigate through the game world. However, the player must
be careful when adapting - if all 5 adaptation slots are filled the player
loses their sentience and by extension, the game.


There are five adaptation slots: head, body, back, arms, and legs. Some traits
can be adapted to more than one slot, allowing the player to be strategic in
how they acquire specific traits based on which slots they may need to keep open.


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
Ability                   | Appearance
--------------------------|-------------------
increased defense         |rhino skin
increased inventory       |kangaroo pouch
does damage when attacked |poison dart frog skin
invisibility              |squid skin

#### Back
Ability                   | Appearance
--------------------------|-------------------
increased swimming speed  |shark fin
increased defense         |hermit crab shell
increased defense         |turtle shell
increased inventory       |camel hump
reduced fall damage       |hermit crab shell
reduced fall damage       |turtle shell
does damage when attacked |porcupine spines
does damage when attacked |lionfish spines

#### Arms
Ability                   | Appearance
--------------------------|-------------------
increased swimming speed  |lionfish fins
increased break strength  |lobster claws
climb walls               |squid arms

#### Legs
Ability                   | Appearance
--------------------------|-------------------
decreased walking speed   |sloth legs
decreased jump height     |sloth legs
increased walking speed   |cheetah legs
increased walking speed   |deer legs
increased jump height     |frog legs
increased jump height     |kangaroo legs
increased swimming speed  |dolphin tail
climb walls               |lobster legs
climb ceilings            |lobster legs
ink attack                |squid legs

## Documentation

### Map Creation

The current plan for map creation is to use a long JS string to build the map.
The first thing the interpreter does is identify the actors and replace those
with the air character in the original string. Actors are given their own array.
The level interpreter will take this string and loop through the ASCII characters
interpreting the expected sprite, and then create another array with the physical
properties. In the end there will be two strings, or matrices of strings, where the
two represent a block map and a sprite map. The block map dictates the behavior 
of specific coordinates of the map, and the sprite map tells the game what sprite 
to display in specific coordinates. This design makes it possible to have a more 
interesting looking map without having to create lots of blocks that use the same 
physics and behaviors.

#### Blocks
Character | Block Name | Description
----------|------------|---------------------------
.         | Air        |Empty, doesn't interact with anything.
\#        | Wall       |Solid block, stops movement upon collision.
\+        | Lava       |Ends the game when player collides.    
~         | Water      |Slows the player's jump and run speed.


#### Sprites

##### ASCII Legend

Mapping relies on single-letter/digit characters.

Character | Sprite Name | Block | File Path
----------|-------------|-------|--------------------------
0         |Air          |.      |N/A
1         |Grass        |\#     |sprites/blocks/ground.png
2         |Dirt         |\#     |N/A
3         |Water        |~      |sprites/blocks/water.png
5         |Lava         |\+     |N/A


#### Map

