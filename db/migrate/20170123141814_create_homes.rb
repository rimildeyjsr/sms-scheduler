class CreateHomes < ActiveRecord::Migration[5.0]
  def change
    create_table :homes do |t|
      t.string :campaign_name
      t.integer :phone_number_receiver
      t.date :start_date
      t.date :end_date
      t.time :start_time
      t.text :sms_msg

      t.timestamps
    end
  end
end
