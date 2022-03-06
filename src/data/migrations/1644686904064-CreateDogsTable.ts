import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDogsTable1644686904064 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'dogs',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'text',
                    isNullable: false,
                    
                },
                {
                    name: 'age',
                    type: 'text',
                    isNullable: false,
                },
                {
                    name: 'breed',
                    type: 'text',
                    isNullable: true,
                },
                {
                    name: 'phone_number',
                    type: 'text',
                    isNullable: true,
                },
                {
                    name: 'gender',
                    type: 'text',
                    isNullable: false,
                },
                {
                    name: 'size',
                    type: 'text',
                    isNullable: true,
                },
                {
                    name: 'sterilized',
                    type: 'boolean',
                    isNullable: false,
                },
                {
                    name: 'social_with_cats',
                    type: 'boolean',
                    isNullable: true,
                },
                {
                    name: 'social_with_dogs',
                    type: 'boolean',
                    isNullable: true,
                },
                {
                    name: 'social_with_kids',
                    type: 'boolean',
                    isNullable: true,
                },
                {
                    name: 'observations',
                    type: 'text',
                    isNullable: true,
                },
                {
                    name: 'microchip',
                    type: 'text',
                    isNullable: true,
                },
                {
                    name: 'profile_image_id',
                    type: 'integer',
                    isNullable: true,
                },
                {
                    name: 'price_full_day',
                    type: 'integer',
                    isNullable: false,
                },
                {
                    name: 'price_half_day',
                    type: 'integer',
                    isNullable: false,
                },
                {
                    name: 'price_walk',
                    type: 'integer',
                    isNullable: false,
                },
            ]
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('dogs');
    }

}
