import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, ComposedChart } from 'recharts';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface MonthlyData {
  month: string;
  irradiation: number;
  production: number;
  classicProduction: number;
  newGenProduction: number;
  percentage: number;
}

interface MonthlyProductionChartProps {
  monthlyData: MonthlyData[];
  classicPower: number;
  newGenPower: number;
  classicSavings: number;
  newGenSavings: number;
}

type ChartType = 'production' | 'irradiation' | 'comparison';

export const MonthlyProductionChart: React.FC<MonthlyProductionChartProps> = ({
  monthlyData,
  classicPower,
  newGenPower,
  classicSavings,
  newGenSavings
}) => {
  const [chartType, setChartType] = useState<ChartType>('production');

  // Calcul des statistiques annuelles
  const totalClassicProduction = monthlyData.reduce((sum, month) => sum + month.classicProduction, 0);
  const totalNewGenProduction = monthlyData.reduce((sum, month) => sum + month.newGenProduction, 0);
  const averageMonthlyProduction = Math.round(totalNewGenProduction / 12);
  const productionPerKwc = Math.round(totalNewGenProduction / newGenPower);

  const renderChart = () => {
    switch (chartType) {
      case 'production':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
              <XAxis 
                dataKey="month" 
                stroke="#64748b"
                fontSize={12}
              />
              <YAxis 
                stroke="#64748b"
                fontSize={12}
                label={{ value: 'Production (kWh)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
                formatter={(value: number, name: string) => [
                  `${value.toLocaleString()} kWh`,
                  name === 'classicProduction' ? 'Panneaux standards' : 'Nouvelle génération'
                ]}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="classicProduction" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                name="Panneaux standards"
              />
              <Line 
                type="monotone" 
                dataKey="newGenProduction" 
                stroke="#10b981" 
                strokeWidth={3}
                dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                name="Nouvelle génération"
              />
            </LineChart>
          </ResponsiveContainer>
        );

      case 'irradiation':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
              <XAxis 
                dataKey="month" 
                stroke="#64748b"
                fontSize={12}
              />
              <YAxis 
                stroke="#64748b"
                fontSize={12}
                label={{ value: 'Irradiation (kWh/m²)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
                formatter={(value: number) => [`${value} kWh/m²`, 'Irradiation mensuelle']}
              />
              <Bar 
                dataKey="irradiation" 
                fill="#f59e0b" 
                radius={[4, 4, 0, 0]}
                name="Irradiation mensuelle"
              />
            </BarChart>
          </ResponsiveContainer>
        );

      case 'comparison':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
              <XAxis 
                dataKey="month" 
                stroke="#64748b"
                fontSize={12}
              />
              <YAxis 
                yAxisId="left"
                stroke="#64748b"
                fontSize={12}
                label={{ value: 'Production (kWh)', angle: -90, position: 'insideLeft' }}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right"
                stroke="#64748b"
                fontSize={12}
                label={{ value: 'Irradiation (kWh/m²)', angle: 90, position: 'insideRight' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
              />
              <Legend />
              <Bar 
                yAxisId="left"
                dataKey="newGenProduction" 
                fill="#10b981" 
                radius={[2, 2, 0, 0]}
                name="Production (kWh)"
                opacity={0.8}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="irradiation" 
                stroke="#f59e0b" 
                strokeWidth={3}
                dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
                name="Irradiation (kWh/m²)"
              />
            </ComposedChart>
          </ResponsiveContainer>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-foreground mb-2">🌞 Production Solaire Mensuelle</h3>
        <p className="text-muted-foreground">
          Installation {newGenPower} kWc - Variabilité saisonnière
        </p>
      </div>

      {/* Contrôles du graphique */}
      <div className="flex justify-center space-x-2">
        <Button
          variant={chartType === 'production' ? 'default' : 'outline'}
          onClick={() => setChartType('production')}
          size="sm"
        >
          Production (kWh)
        </Button>
        <Button
          variant={chartType === 'irradiation' ? 'default' : 'outline'}
          onClick={() => setChartType('irradiation')}
          size="sm"
        >
          Irradiation (kWh/m²)
        </Button>
        <Button
          variant={chartType === 'comparison' ? 'default' : 'outline'}
          onClick={() => setChartType('comparison')}
          size="sm"
        >
          Comparaison
        </Button>
      </div>

      {/* Graphique */}
      <Card className="p-6">
        {renderChart()}
      </Card>

      {/* Statistiques annuelles */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <div className="text-2xl font-bold text-blue-700">
            {totalNewGenProduction.toLocaleString()}
          </div>
          <div className="text-sm text-blue-600">Production annuelle (kWh)</div>
        </Card>
        
        <Card className="p-4 text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <div className="text-2xl font-bold text-green-700">
            {productionPerKwc}
          </div>
          <div className="text-sm text-green-600">kWh/kWc/an</div>
        </Card>
        
        <Card className="p-4 text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <div className="text-2xl font-bold text-purple-700">
            {averageMonthlyProduction}
          </div>
          <div className="text-sm text-purple-600">Moyenne mensuelle (kWh)</div>
        </Card>
        
        <Card className="p-4 text-center bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <div className="text-2xl font-bold text-orange-700">
            {newGenSavings.toLocaleString()} €
          </div>
          <div className="text-sm text-orange-600">Économies annuelles</div>
        </Card>
      </div>

      {/* Tableau mensuel détaillé */}
      <Card className="p-6">
        <h4 className="text-lg font-semibold mb-4">Détail mensuel</h4>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left p-3 font-semibold">Mois</th>
                <th className="text-center p-3 font-semibold">Irradiation (kWh/m²)</th>
                <th className="text-center p-3 font-semibold">Production Standard (kWh)</th>
                <th className="text-center p-3 font-semibold">Production Nouvelle Gen. (kWh)</th>
                <th className="text-center p-3 font-semibold">% Annuel</th>
                <th className="text-center p-3 font-semibold">Gain</th>
              </tr>
            </thead>
            <tbody>
              {monthlyData.map((month, index) => {
                const isWinter = index < 2 || index > 9;
                const isSummer = index >= 5 && index <= 7;
                const gain = month.newGenProduction - month.classicProduction;
                
                return (
                  <tr 
                    key={month.month}
                    className={`
                      border-b border-border hover:bg-muted/50 transition-colors
                      ${isSummer ? 'bg-yellow-50' : ''}
                      ${isWinter ? 'bg-blue-50' : ''}
                    `}
                  >
                    <td className="p-3 font-medium">{month.month}</td>
                    <td className="p-3 text-center">{month.irradiation}</td>
                    <td className="p-3 text-center text-blue-600">{month.classicProduction.toLocaleString()}</td>
                    <td className="p-3 text-center text-green-600 font-semibold">{month.newGenProduction.toLocaleString()}</td>
                    <td className="p-3 text-center">{month.percentage}%</td>
                    <td className="p-3 text-center text-green-600 font-semibold">+{gain.toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 flex justify-center space-x-6 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-yellow-200 rounded mr-2"></div>
            <span>Période estivale (forte production)</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-200 rounded mr-2"></div>
            <span>Période hivernale (production réduite)</span>
          </div>
        </div>
      </Card>
    </div>
  );
};