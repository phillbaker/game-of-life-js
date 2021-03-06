# Game of Life - Pairing Kit

A base repository for pairing interviews based on the excellent Code Retreat format

## Background / Problem Statement

This is cribbed from the Code Retreat description:

> Conway's Game of Life
>
> The Game of Life, also known simply as Life, is a cellular automaton devised
> by the British mathematician John Horton Conway in 1970.
>
> The "game" is a zero-player game, meaning that its evolution is determined by
> its initial state, requiring no further input. One interacts with the Game of
> Life by creating an initial configuration and observing how it evolves.
>
> The universe of the Game of Life is an infinite two-dimensional orthogonal
> grid of square cells, but in this case we can simplify it to a fixed size
> grid. Each cell is in one of two possible states, live or dead. Every cell
> interacts with its neighbors, it can have up to 8, which are the cells that
> are directly horizontally, vertically, or diagonally adjacent, if they exist.
> At each step in time, the following transitions occur:
>
> * Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
> * Any live cell with more than three live neighbours dies, as if by overcrowding.
> * Any live cell with two or three live neighbours lives on to the next generation.
> * Any dead cell with exactly three live neighbours becomes a live cell.
>
> The initial pattern constitutes the seed of the system. The first generation
> can be passed in as an initial state and following generations are created by
> applying the above rules simultaneously to every cell in the grid. Births and
> deaths happen simultaneously, and the discrete moment at which this happens is
> sometimes called a tick (in other words, each generation is a pure function of
> the one before). The rules continue to be applied repeatedly to create further
> generations.

## Instructions

Implement the Game of Life. When implementing the Game of Life in an interview
please emphasize code quality, testing and please articulate your thinking as
you go.

This is a pairing exercise so your interviewee is your pair - treat them as
such.  Ask questions.  Bounce ideas off of them, etc.

After NPM installing, the tests can be run using `node test.js`.

## Inspiration

Based on @daveworth's excellent [Game Of Life Pairing](https://github.com/daveworth/game_of_life_pairing).