# Chess Engine

This is an engine for running a game of chess, it is designed to be isomorphic and pluggable into browsers or node.js.

A graph of the project files can be found [here](docs/Project_graph.md), which should give a quick overview of how the project files are organized.

## Goals

* Feature-complete, following all the rules of chess, not allowing illegal moves and not preventing legal moves
* Type safety and internal integrity
* Functional purity
* Performance

These goals are ordered, so each rule has precedence over the next, we won't compromise type safety for performance, nor will we compromise game rules for type safety.
