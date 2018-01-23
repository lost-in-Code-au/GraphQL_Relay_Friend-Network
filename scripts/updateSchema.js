import fs from 'fs'
import path from 'path'
import { schema } from '../data/schema'
import { printSchema } from 'graphql'

const schemaPath = path.resolve(__dirname, '../data/schema.graphql')

fs.writeFileSync(schemaPath, printSchema(schema))

console.log(`New schema updated in: ${schemaPath}`)
