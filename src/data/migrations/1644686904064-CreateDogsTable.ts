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
                },
                {
                    name: 'age',
                    type: 'text',
                },
                {
                    name: 'breed',
                    type: 'text',
                },
                {
                    name: 'phone_number',
                    type: 'text',
                },
                {
                    name: 'gender',
                    type: 'text',
                },
                {
                    name: 'size',
                    type: 'text',
                },
                {
                    name: 'sterilized',
                    type: 'boolean',
                },
                {
                    name: 'social_with_cats',
                    type: 'boolean',
                },
                {
                    name: 'social_with_dogs',
                    type: 'boolean',
                },
                {
                    name: 'social_with_kids',
                    type: 'boolean',
                },
                {
                    name: 'observations',
                    type: 'text',
                },
                {
                    name: 'microchip',
                    type: 'text',
                },
                {
                    name: 'profile_image_id',
                    type: 'integer',
                },
                {
                    name: 'price_full_day',
                    type: 'integer',
                },
                {
                    name: 'price_half_day',
                    type: 'integer',
                },
                {
                    name: 'price_walk',
                    type: 'integer',
                },
                {
                    name: 'user_id',
                    type: 'integer',
                },
            ]
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('dogs');
    }

}
