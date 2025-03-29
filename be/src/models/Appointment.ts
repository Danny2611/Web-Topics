import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IAppointment extends Document {
  member_id: Types.ObjectId;
  trainer_id: Types.ObjectId;
  notes?: string;
  date: Date;
  time: string;
  location?: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  created_at: Date;
  updated_at: Date;
}

const appointmentSchema: Schema = new Schema({
  member_id: { type: Schema.Types.ObjectId, ref: 'Member', required: true },
  trainer_id: { type: Schema.Types.ObjectId, ref: 'Trainer', required: true },
  notes: String,
  date: { type: Date, required: true },
  time: { type: String, required: true },
  location: String,
  status: { type: String, enum: ['confirmed', 'pending', 'cancelled'], default: 'pending' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

export default mongoose.model<IAppointment>('Appointment', appointmentSchema);