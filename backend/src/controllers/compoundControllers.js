import { underscoredIf } from 'sequelize/lib/utils';
import Compound from '../models/Compound.js';

// export async function readAllCompounds(req, res){
//     try {
//         const compounds = await Compound.findAll();
//         return res.json(compounds);
//     } catch (err) {
//         console.error("DB error in readAllCompounds:", err);
//         return res.status(500).json({ error: "Database error" });
//     }
// };

export async function readAllCompounds(req, res){
    try {
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 10;

        const offset = (page - 1) * limit;

        const {count, rows} = await Compound.findAndCountAll({
            limit, 
            offset,
            order : [['id', 'ASC']]
        });

        const totalPages = Math.ceil(count/ limit);

        // return res.json({
        //     data : rows, 
        //     pagination : {
        //         page, 
        //         limit, 
        //         totalItems : count, 
        //         totalPages
        //     }
        // });

        return res.json(rows);
    } catch (err) {
        console.error("DB error in readAllCompounds (Paginated Version) : ", err);
        return res.status(500).json({ error: "Database error" });
    }
};

export async function readCompound(req, res){
    try {
        const {id} = req.params;
        const compound = await Compound.findByPk(id);
        if(!compound){
            return res.status(404).json({message : "Compound not found."});
        }
        return res.json(compound);
    } catch (error) {
        console.error("Error getting one compound", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export async function createCompound(req, res) {
  try {
    console.log('REQUEST BODY:', req.body);

    const { name, image, description } = req.body;

    const compound = await Compound.create({
      name,
      image,
      description,
    });

    return res.status(201).json(compound);
  } catch (error) {
    console.error('FULL CREATE ERROR:', error);
    return res.status(500).json({
      name: error.name,
      message: error.message,
      errors: error.errors,
    });
  }
}

// export async function createCompound(req, res) {
//   try {
//     console.log('REQUEST BODY:', req.body);

//     const {name, image, description, id} = req.body;

//     let compound;

//     if(id===undefined){
//         compound = await Compound.create({
//             name,
//             image,
//             description,
//         });
//     } else{
//         if(readCompound(id)){
//             return res.json({message : "Compound exists at said id already."});
//         }
//         compound = await Compound.create({
//             id,
//             name,
//             image, 
//             description
//         })
//     }

//     return res.status(201).json(compound);
//   } catch (error) {
//     console.error('FULL CREATE ERROR:', error);
//     return res.status(500).json({
//       name: error.name,
//       message: error.message,
//       errors: error.errors,
//     });
//   }
// }

export async function updateCompound (req, res){
    try {
        const {id} = req.params;
        const {name, image, description} = req.body;

        const compound = await Compound.findByPk(id);
        if(!compound){
            return res.status(404).json({message : "Compound not found"});
        }

        await compound.update({
            name, 
            image, 
            description
        });
        
        return res.json(compound);
    } catch (err) {
        console.error('Error updating compound:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export async function deleteCompound(req, res) {
  try {
    const { id } = req.params;
    const compound = await Compound.findByPk(id);
    if (!compound) {
      return res.status(404).json({ message: 'Compound not found' });
    }
    await compound.destroy();
    return res.json({ message: 'Compound deleted successfully' });
  } catch (err) {
    console.error('Error deleting compound:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}