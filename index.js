
// New Image Function
function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}
// New Item Function
function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)

    object.addEventListener('dblclick', () => {
        object.remove()
    })
}





// "New" Images png's 
newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

// "New" Items png's
newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)








// Green Character img
    // let greenCharacter = document.createElement('img')
    // greenCharacter.src = 'assets/green-character.gif'
    // greenCharacter.style.position = 'fixed'
    // greenCharacter.style.left = '100px'
    // greenCharacter.style.bottom = '100px'
    // document.body.append(greenCharacter)

// Pine Tree img
    // let pineTree = document.createElement('img')
    // pineTree.src = 'assets/pine-tree.png'
    // pineTree.style.position = 'fixed'
    // pineTree.style.left = '450px'
    // pineTree.style.bottom = '200px'
    // document.body.append(pineTree)
    

