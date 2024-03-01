
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const faker = require('faker');
faker.locale = 'es';
const url = 'mongodb://localhost:27017';
const dbName = 'controlEscolar';
const client = new MongoClient(url);

async function run() {
    try {
        
        await client.connect();

        console.log("Conectado correctamente al servidor");

        const db = client.db(dbName);

        const profesores = db.collection('Profesor');
        for (let i = 0; i < 10; i++) {
            const nombre = faker.name.firstName();
const apellidoPaterno = faker.name.lastName();
const apellidoMaterno = faker.name.lastName();
            await profesores.insertOne({
                _id: i + 1,
                numeroHuella: "10TE" + faker.datatype.number({ min: 1000, max: 9999 }),

                nombre: faker.name.findName(),
                apellidoPaterno: faker.name.findName(),
                apellidoMaterno: faker.name.findName(),
                sexo: faker.random.arrayElement(["Femenino", "Masculino"]),
                fechaNacimiento: faker.date.past,
                direccion: {
                    calle: faker.random.arrayElement([
        "Hidalgo","Morelos","Benito Juárez","Emiliano Zapata","Madero",
        "Miguel Hidalgo","Lázaro Cárdenas","Zaragoza","Independencia",
        "Vicente Guerrero","Insurgentes","Paseo de la Reforma","Anillo Periférico",
        "Calzada Tlalpan","Avenida Juárez","Revolución","Constituyentes",
        "División del Norte","Eje Central","Avenida de los Insurgentes Sur",
        "Avenida Universidad","Calzada de Tlalpan","Eje Central Lázaro Cárdenas",
        "Avenida Chapultepec","Avenida Coyoacán","Avenida Cuauhtémoc",
        "Avenida Popocatépetl","Avenida Río Churubusco"
        ]),
                    numero: faker.datatype.number({min: 1, max:999}),
                    colonia:faker.random.arrayElement(["18 de Marzo", "Agrícola Oriental", 
                    "Agrícola Pantitlán", "El Rodeo", "Federal", "Granjas México", "Militar Marte", 
                    "Hidalgo", "Morelos", "Benito Juárez", "Emiliano Zapata", "Madero", "Miguel Hidalgo",
                    "Lázaro Cárdenas", "Zaragoza", "Independencia", "Vicente Guerrero", "Insurgentes", "Paseo de la Reforma", 
                    "Anillo Periférico", "Calzada Tlalpan", "Avenida Juárez", "Revolución", "Constituyentes", "División del Norte", 
                    "Eje Central", "Avenida de los Insurgentes Sur", "Avenida Universidad", "Calzada de Tlalpan", "Eje 3 Sur", 
                    "Eje 4 Sur", "Eje 5 Sur", "Eje 6 Sur", "Eje 7 Sur", "Eje 8 Sur", "Eje 1 Poniente", "Eje 2 Poniente", "Eje 3 Poniente", 
                    "Eje 4 Poniente", "Eje 5 Poniente", "Eje 6 Poniente", "Eje 7 Poniente", "Eje 8 Poniente", "Eje 1 Oriente", "Eje 2 Oriente", 
                    "Eje 3 Oriente", "Eje 4 Oriente", "Eje 5 Oriente", "Eje 6 Oriente", "Eje 7 Oriente", "Eje 8 Oriente"
        ]),     
        ciudad: faker.random.arrayElement(["Ciudad de México", "Tijuana", "Ecatepec de Morelos", "León", "Heroica Puebla de Zaragoza", "Ciudad Juárez", 
        "Guadalajara", "Zapopan", "Monterrey", "Nezahualcóyotl", "Chihuahua", "Mérida", "Cancún", "Saltillo", "Aguascalientes", "Hermosillo", "Mexicali", 
        "San Luis Potosí", "Culiacán Rosales", "Santiago de Querétaro", "Naucalpan de Juárez", "Morelia", "Chimalhuacán", "Reynosa", "Torreón", "Durango", 
        "Ensenada", "Guadalajara", "Guanajuato", "Guaymas", "Hermosillo", "Irapuato", "Juárez", "La Laguna", "La Paz", "La Piedad", "León", "Los Cabos", 
        "Los Mochis", "Manzanillo", "Matamoros", "Mazatlán", "Mexicali", "Minatitlán", "Monclova", "Monterrey", "Morelia", "Mérida", "Nuevo Laredo", "Oaxaca", 
        "Ocotlán", "Orizaba"
        
        ]),
                    estado: faker.random.arrayElement(["Puebla", "México"]),
                    codigoPostal: faker.random.arrayElement(["73870", "73890", "73800", "73890"
                    ]),
                },
                curp: faker.random.alphaNumeric(18).toUpperCase(),
                rfc: faker.random.alphaNumeric(13).toUpperCase(),
                turno:  faker.random.arrayElement(["Tiempo Completo", "Medio Tiempo"]),
                nacionalidad: faker.random.arrayElement(["Mexicana", "Estadounidense", "Canadiense"]),
        nss: faker.datatype.number({
            min:100000000, max: 999999999
        }),
        correoInstitucional: faker.internet.email(nombre, apellidoPaterno),
        telefono: faker.phone.phoneNumber(),
        departamento: faker.random.arrayElement(["Ciencias Básicas", "Informática"]),
                materias: [faker.datatype.number({ min: 1, max: 10 })]
            });
        }

        const alumnos = db.collection('Alumno');
        for (let i = 0; i < 50; i++) {
            const numMaterias = faker.datatype.number({ min: 1, max: 10 });
            const calificaciones = [];
            for (let j = 0; j < numMaterias; j++) {
                calificaciones.push({
                    materia: faker.datatype.number({ min: 1, max: 10 }),
                    calificacion: faker.datatype.number({ min: 1, max: 10 })
                });
            }
            const nombre = faker.name.firstName();
            const apellidoPaterno = faker.name.lastName();
            const apellidoMaterno = faker.name.lastName();
        
            await alumnos.insertOne({
                _id: i + 1,
                numeroHuella: "21TE" + faker.datatype.number({ min: 1000, max: 9999 }),
                nombre: nombre,
                apellidoPaterno: apellidoPaterno,
                apellidoMaterno: apellidoMaterno,
                sexo: faker.random.arrayElement(["Femenino", "Masculino"]),
                fechaNacimiento: faker.date.past(),
                direccion: {
                    calle: faker.random.arrayElement([
                        "Hidalgo","Morelos","Benito Juárez","Emiliano Zapata","Madero",
                        "Miguel Hidalgo","Lázaro Cárdenas","Zaragoza","Independencia",
                        "Vicente Guerrero","Insurgentes","Paseo de la Reforma","Anillo Periférico",
                        "Calzada Tlalpan","Avenida Juárez","Revolución","Constituyentes",
                        "División del Norte","Eje Central","Avenida de los Insurgentes Sur",
                        "Avenida Universidad","Calzada de Tlalpan","Eje Central Lázaro Cárdenas",
                        "Avenida Chapultepec","Avenida Coyoacán","Avenida Cuauhtémoc",
                        "Avenida Popocatépetl","Avenida Río Churubusco"
                    ]),
                    numero: faker.datatype.number({ min: 1, max: 999 }),
                    colonia: faker.random.arrayElement([
                        "18 de Marzo", "Agrícola Oriental", "Agrícola Pantitlán", "El Rodeo", "Federal", "Granjas México", "Militar Marte", "Hidalgo", "Morelos", "Benito Juárez", "Emiliano Zapata", "Madero", "Miguel Hidalgo", "Lázaro Cárdenas", "Zaragoza", "Independencia", "Vicente Guerrero", "Insurgentes", "Paseo de la Reforma", "Anillo Periférico", "Calzada Tlalpan", "Avenida Juárez", "Revolución", "Constituyentes", "División del Norte", "Eje Central", "Avenida de los Insurgentes Sur", "Avenida Universidad", "Calzada de Tlalpan", "Eje 3 Sur", "Eje 4 Sur", "Eje 5 Sur", "Eje 6 Sur", "Eje 7 Sur", "Eje 8 Sur", "Eje 1 Poniente", "Eje 2 Poniente", "Eje 3 Poniente", "Eje 4 Poniente", "Eje 5 Poniente", "Eje 6 Poniente", "Eje 7 Poniente", "Eje 8 Poniente", "Eje 1 Oriente", "Eje 2 Oriente", "Eje 3 Oriente", "Eje 4 Oriente", "Eje 5 Oriente", "Eje 6 Oriente", "Eje 7 Oriente", "Eje 8 Oriente"
                    ]),
                    ciudad: faker.random.arrayElement([
                        "Ciudad de México", "Tijuana", "Ecatepec de Morelos", "León", "Heroica Puebla de Zaragoza", "Ciudad Juárez", "Guadalajara", "Zapopan", "Monterrey", "Nezahualcóyotl", "Chihuahua", "Mérida", "Cancún", "Saltillo", "Aguascalientes", "Hermosillo", "Mexicali", "San Luis Potosí", "Culiacán Rosales", "Santiago de Querétaro", "Naucalpan de Juárez", "Morelia", "Chimalhuacán", "Reynosa", "Torreón", "Durango", "Ensenada", "Guadalajara", "Guanajuato", "Guaymas", "Hermosillo", "Irapuato", "Juárez", "La Laguna", "La Paz", "La Piedad", "León", "Los Cabos", "Los Mochis", "Manzanillo", "Matamoros", "Mazatlán", "Mexicali", "Minatitlán", "Monclova", "Monterrey", "Morelia", "Mérida", "Nuevo Laredo", "Oaxaca", "Ocotlán", "Orizaba"
                    ]),
                    estado: faker.random.arrayElement(["Puebla", "México"]),
                    codigoPostal: faker.random.arrayElement([
                        "73870", "73890", "73800", "73890"
                    ]),
                },
                curp: faker.random.alphaNumeric(18).toUpperCase(),
                rfc: faker.random.alphaNumeric(13).toUpperCase(),
                turno: faker.random.arrayElement(["Tiempo Completo", "Medio Tiempo"]),
                nacionalidad: faker.random.arrayElement(["Mexicana", "Estadounidense", "Canadiense"]),
                nss: faker.datatype.number({
                    min:100000000, max: 999999999
                }),
                correoInstitucional: faker.internet.email(nombre, apellidoPaterno),
                telefono: faker.phone.phoneNumber(),
                carrera: faker.datatype.number({ min: 1, max: 5 }),
                semestre: faker.datatype.number({ min: 1, max: 10 }),
                modalidad: faker.random.arrayElement(['Presencial', 'En línea']),
                calificaciones: calificaciones
            });
        }
        const materias = db.collection('Materia');
        for (let i = 0; i < 10; i++) {
            await materias.insertOne({
                _id: i + 1,
                nombre: faker.lorem.words(3),
                profesor: faker.datatype.number({ min: 1, max: 10 })
            });
        }
        const carreras = db.collection('Carrera');
        for (let i = 0; i < 5; i++) {
            await carreras.insertOne({
                _id: i + 1,
                nombre: faker.lorem.words(2),
                materias: [faker.datatype.number({ min: 1, max: 10 }), faker.datatype.number({ min: 1, max: 10 })]
            });
        }

        console.log("Base de datos creada correctamente con datos falsos");

    } catch (err) {
        console.log(err.stack);
    } finally {
        await client.close();
    }
}
run().catch(console.dir);
