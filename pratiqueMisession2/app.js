class Keyboard{

    constructor(
        name,
        brand,
        compatibleDevices,
        connectivityTechnology,
        keyboardDescription,
        specialFeature,
        colour,
        numberOfKeys,
        style,
        productDimensions,material)

        {
            this.name=name;
            this.brand=brand;
            this.compatibleDevices=compatibleDevices;
            this.connectivityTechnology=connectivityTechnology;
            this.keyboardDescription=keyboardDescription;
            this.specialFeature=specialFeature;
            this.colour=colour;
            this.numberOfKeys=numberOfKeys;
            this.style=style;
            this.productDimensions=productDimensions;
            this.material=material;
        }

        toHtml(){
            const containerHtml  = document.createElement('span')

            const entry = Object.entries(this);

            for (let entry of entries){

                let span = document.createElement('span');
                span.textContent = entry[0] + ':' + entry[1];
                containerHtml.appendChild(span);
            }

            return containerHtml;

        }

}

const stars = [
    new Keyboard("Magic-Refiner","MAGIC-REFINER","Smartphone","Bluetooth","Mechanical",
                "Ergonomic","Off-white&Orange/RedSwitch",68,"Modern","31.2Lx10.2Wx4.3HCentimetres","Polycarbonate"),

    new Keyboard("Magic-Refiner","MAGIC-REFINER","Smartphone","Bluetooth","Mechanical","Ergonomic","Off-white&Orange/RedSwitch",68,"Modern","31.2Lx10.2Wx4.3HCentimetres","Polycarbonate"),

    new Keyboard("Magic-Refiner","MAGIC-REFINER","Smartphone","Bluetooth","Mechanical","Ergonomic","Off-white&Orange/RedSwitch",68,"Modern","31.2Lx10.2Wx4.3HCentimetres","Polycarbonate"),

    new Keyboard("Magic-Refiner","MAGIC-REFINER","Smartphone","Bluetooth","Mechanical","Ergonomic",
                "Off-white&Orange/RedSwitch",68,"Modern","31.2Lx10.2Wx4.3HCentimetres","Polycarbonate"),

];

console.log(stars);