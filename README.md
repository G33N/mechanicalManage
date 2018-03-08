# SafeCar
![logo nut](https://firebasestorage.googleapis.com/v0/b/mechanicalmanage.appspot.com/o/git%2FbannerMechanicalManage-01.png?alt=media&token=2b8c46f2-eb7f-4d29-ac50-44bf388dea75)


A potential project that need more attention.
**SafeCar** you can associate or collaborate to build something big.

Like client you can, find specialist to fix or check your car and why not, get a appointment in few seconds.
Like workshop you can manager you business with a modern system and get more clients!

We care your car more easy and faster!

## Firebase schema

```  
    -|users
        name: string
        address: string
        district: string
        town: string
        employees: number
        telephone: string
        email: string

    -|clients
        -|$uid
            -|$key
                name: string
                address: string
                district: string
                town: string
                telephone: string
                email: string

    -|motives
        -|$key
            name: string
            icon: string
    -|states
        -|$key
            name: string
            icon: string
            color: string

    -|stock
        -|$uid
            -|$key    
                name: string
                stock: number
                date: date
                price: float
                category: category.$key

    -|categories
        -|$key
            description

    -|vehicles
        -|$uid
            -|$key
                client: client.$key
                plate: string
                engine: string
                chassis: string
                brand: string
                model: string
                year: number

    -|workOrders
        -|$uid
            -|$key
                date: date
                client: client.$key
                vehicle: vehicle.$key
                kilometers: number
                note: string
                motive: motive.$key
                -|todo
                    title: string
                    description: string
                    materials: string[]
                    state: state.$key // Refered to states node.
```

## How install
This APP required someone dependencies they are:
1. npm
2. git
3. angular-cli


When you have ready the dependencies just follow this tasks.

You should type this:
1. `git clone https://github.com/G33N/mechanicalManage.git`
2. `cd mechanicalManage`
3. `npm install`

End.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Authors

* **Celiz Matias** - *Development Manager / Support Manager* - [G33N](https://github.com/G33N)
See also the list of [contributors](https://github.com/G33N/mechanicalManage/contributors) who participated in this project.
