## Planning
_ Create an application to allow users (zoo employees) to track animals in their care. _

1. Specs
* User will be able to add new animals.
* Animals will include:
  * Species
  * Name
  * Age
  * Diet (carnivore, omnivore, herbivore)
  * Location
  * Caretakers (how many caretakers this animal needs)
  * Sex
  * Likes
  * Dislikes
* Site will list all animals on the homepage.
* Site will allow users sort the list of animals by:
  * Age
  * Diet type  
  * Location
  * Possibly more sorting options  
* Site will allow users to add and edit animals.

2. Integration

* Routes/components:
  * Root
    * App component
      * Animal list component
      * New animal component
      * Edit animal component
    * filter pipe

  3. UX/UI
  * Include and modify with bootstrap.
  * Utilize custom styles.

3. Optional Exploration Goals:

  * Add over categories(bird, mammal, creepy, water, imaginary)
  * Add classes based on over categories
  * Add origin locations
  * Create filters and select for add/edit origins 
  * Make select fields to enter/edit locations, over categories, gender, diet
