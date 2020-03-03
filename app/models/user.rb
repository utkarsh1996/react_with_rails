class User < ApplicationRecord
    has_secure_password
    validates :name, presence: true
    validates :phone, presence: true
    validates :email, presence: true, uniqueness: {case_sensitive: false}
end
