// implementar todos los métodos de la clase Televisor 
// agregar validaciones:
// 1- si no está encendido no puede realizar ninguna acción, salvo encender
// 2- volumen min 0 / max 100
// 3- canal min 1 / max 99
// 4- función info muestra canal, volumen y la hora actual

class TV{
    private isOn: boolean;
    private volume: number;
    private channel:number;
    constructor(on: boolean, chn: number , vol: number){
        this.isOn = on
        this.volume = vol
        this.channel = chn
    }
    switchOnOff(): void{
        this.isOn = !this.isOn;
        console.log(this.isOn ? 'Encendido' : 'Apagado');
    }
    volUp(): void{  
        if (this.volume == 100 || !this.isOn) return
        this.volume ++
    }
    volDown(): void{
        if (this.volume == 0 || !this.isOn) return
        this.volume --
    }
    channelUp(): void{
        if(!this.isOn) return

        if (this.channel == 99){
                this.channel = 1;
            } else{
                this.channel ++
            }
        
        console.log(this.channel);
        
    }
    
    channelDown(): void{
        if(!this.isOn) return

        if (this.channel == 1){
                this.channel = 99;
            } else{
                this.channel --
            }
        
        console.log(this.channel);

    }
    pickChannel(chn: number): void{
        if(!this.isOn) return
        
        if (chn > 0 && chn < 100){
            this.channel = chn
            console.log(`Cambiaste al canal ${chn}`);
        } else {
            console.log(`Seleccione un canal entre 1 y 99`);
        }
    }

    infoTV (){
        const today = new Date
        console.log(
            this.channel,
            this.volume,
            today.toLocaleTimeString()
        )
        
    }
}

const tv01 = new TV (false, 1, 1)

tv01.switchOnOff();
tv01.channelDown();
tv01.channelUp();
tv01.volUp();
tv01.volUp();
tv01.volUp();
tv01.volUp();
tv01.pickChannel(55)
tv01.infoTV();

