import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IMembership extends Document {
  member_id: Types.ObjectId;
  package_id: Types.ObjectId;
  payment_id: Types.ObjectId;
  start_date: Date;
  end_date: Date;
  auto_renew: boolean;
  status: 'active' | 'expired' | 'pending' | 'paused';
  created_at: Date;
  updated_at: Date;
}

const membershipSchema: Schema = new Schema({
  member_id: { type: Schema.Types.ObjectId, ref: 'Member', required: true },
  package_id: { type: Schema.Types.ObjectId, ref: 'Package', required: true },
  payment_id: { type: Schema.Types.ObjectId, ref: 'Payment', required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  auto_renew: { type: Boolean, default: false },
  status: { type: String, enum: ['active', 'expired', 'pending', 'paused'], default: 'active' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

export default mongoose.model<IMembership>('Membership', membershipSchema);