function depend(input){
    var packages = []

    var packages_depend = [];

    input.forEach(function(package){
        package = package.split(": "); 
        if(package[1] === ""){
            packages.push(package[0])
        }else{
            packages_depend.push({
                package: package[0],
                dependency: package[1]
            })
        }
    })

    while(packages_depend.length > 0){
        var package_count = packages_depend.length;

        packages_depend.forEach(function(with_dependency, index, object){
            if( packages.indexOf(with_dependency.dependency) >= 0 ){
                packages.push(with_dependency.package);
                object.splice(index, 1);
            }
        })
        
        if(packages_depend.length == package_count){
            return false;
        }
    }


    return packages.join(", ")
}

console.log(depend(['KittenService: ','Leetmeme: Cyberportal','Cyberportal: Ice','CamelCaser: KittenService','Fraudstream: Leetmeme','Ice: ']))
console.log(depend(['KittenService: ','Leetmeme: Unknown package']))
console.log(depend(['KittenService: ','Leetmeme: Caramel'])) 
console.log(depend(['KittenService: ','CamelCaser: KittenService'])) 

