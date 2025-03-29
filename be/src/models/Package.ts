import mongoose, { Document, Schema } from 'mongoose';

export interface IPackage extends Document {
  name: string;
  max_members?: number;
  price: number;
  duration: number;
  description?: string;
  benefits: string[];
  status: 'active' | 'inactive';
  created_at: Date;
  deleted_at?: Date;
  updated_at: Date;
  category?: 'basic' | 'premium' | 'specialized' | 'standard' | 'vip';
  popular?: boolean;
}

const packageSchema: Schema = new Schema({
  name: { type: String, required: true },
  max_members: Number,
  price: { type: Number, required: true },
  duration: Number,
  description: String,
  benefits: [String],
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  created_at: { type: Date, default: Date.now },
  deleted_at: Date,
  updated_at: { type: Date, default: Date.now },
  category: { 
    type: String, 
    enum: ['basic', 'premium', 'specialized', 'standard', 'vip'],
    default: 'basic'
  },
  popular: { 
    type: Boolean, 
    default: false 
  }
});

export default mongoose.model<IPackage>('Package', packageSchema);