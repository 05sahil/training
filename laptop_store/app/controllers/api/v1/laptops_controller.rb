module Api
  module V1
    class LaptopsController < ApplicationController
      def index
        laptops = Laptop.all
        render json: {data: laptops, status: 200, message: 'loaded laptops'}
      end

      def show
        laptop = Laptop.find(params[:id])
        render json: {data: laptop, status: 200, message: 'loaded laptop'}
      end
    end
  end
end