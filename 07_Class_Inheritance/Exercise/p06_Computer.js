class Manufacturer {
    constructor(manufacturer) {
        if (new.target === Manufacturer) {
            throw new TypeError('Abstract class cannot be instantiated directly');
        }
        this.manufacturer = manufacturer;
    }
}

class Keyboard extends Manufacturer{
    constructor(manufacturer, responseTime) {
        super(manufacturer);
        this.responseTime = responseTime;
    }
}

class Monitor extends Manufacturer{
    constructor(manufactorer, width, height) {
        super(manufactorer);
        this.width = Number(width);
        this.height = Number(height);
    }
}

class Battery extends Manufacturer {
    constructor(manufacturer, expectedLife) {
        super(manufacturer);
        this.expectedLife = Number(expectedLife);
    }
}

class Computer extends Manufacturer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
        if (new.target === Computer) {
            throw new TypeError('Abstract class cannot be instantiated directly');
        }
        super(manufacturer);
        this.processorSpeed = Number(processorSpeed);
        this.ram = Number(ram);
        this.hardDiskSpace = Number(hardDiskSpace);
    }
}

class Laptop extends Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
        super(manufacturer, processorSpeed, ram, hardDiskSpace);
        this.weight = Number(weight);
        this.color = color;
        this.battery = battery;
    }

    set battery(battery) {
        if (battery instanceof Battery) {
            this._battery = battery;
        } else {
            throw new TypeError;
        }
    }

    get battery() {
        return this._battery;
    }
}

class Desktop extends Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
        super(manufacturer, processorSpeed, ram, hardDiskSpace);
        this.keyboard = keyboard;
        this.monitor = monitor;
    }

    set keyboard(keyboard) {
        if (keyboard instanceof Keyboard) {
            this._keyboard = keyboard;
        } else {
            throw new TypeError;
        }
    }

    get keyboard() {
        return this._keyboard;
    }

    set monitor(monitor) {
        if (monitor instanceof Monitor) {
            this._monitor = monitor;
        } else {
            throw new TypeError;
        }
    }

    get monitor() {
        return this._monitor;
    }
}