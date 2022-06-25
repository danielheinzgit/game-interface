# game-interface
Implements several interface screens typically found in a computer game, such as interface, character creation, etc.

# Structure
The interfaces follow a clear hierarchical structure, with the screen manager potentially containing all possible interface screens:
Screen -> Panel -> Complex Widget -> Simple Widget

A screen's task is to tie together the content within and provide a simple API to the external classes, it consists of multiple panels.
A panel is either a simple (such as a text window with a title and a description) or a wrapper for a complex widget that adds additional functionality to it.
A complex widget such as a list contains several simple widgets, such as range sliders for character creation or inventory items.
A simple widget handles one simple tasks and is the basic building block of the interface.
