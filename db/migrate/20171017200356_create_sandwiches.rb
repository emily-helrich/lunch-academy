class CreateSandwiches < ActiveRecord::Migration[5.1]
  def change
    create_table :sandwiches do |t|
    	t.string :name, null: false
    	t.index :name, unique: true
    	t.text :description, null: false
    	t.string :image_url, null: false

    	t.timestamps
    end
  end
end
