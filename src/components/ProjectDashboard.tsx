import { TrendingUp, Users, CheckCircle, BarChart3 } from "lucide-react";

const ProjectDashboard = () => {
  return (
    <div className="bg-gray-50 p-4 sm:p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Project Dashboard
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-green-800">LIVE</span>
          </div>
          <div className="w-10 h-10 bg-green-500 rounded-full"></div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {/* Projects Delivered */}
        <div className="p-4 sm:p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-gray-600" />
              <span className="text-xs sm:text-sm text-green-600 font-semibold">
                +23%
              </span>
            </div>
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-green-600" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
            300+
          </div>
          <div className="text-xs sm:text-sm text-gray-600">
            Projects Delivered
          </div>
        </div>

        {/* Client Satisfaction */}
        <div className="p-4 sm:p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-gray-600" />
              <span className="text-xs sm:text-sm text-blue-600 font-semibold">
                +5.2%
              </span>
            </div>
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-blue-600" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
            97%
          </div>
          <div className="text-xs sm:text-sm text-gray-600">
            Client Satisfaction
          </div>
        </div>

        {/* Happy Clients */}
        <div className="p-4 sm:p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-gray-600" />
              <span className="text-xs sm:text-sm text-purple-600 font-semibold">
                +18%
              </span>
            </div>
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 text-purple-600" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
            290+
          </div>
          <div className="text-xs sm:text-sm text-gray-600">Happy Clients</div>
        </div>

        {/* Uptime */}
        <div className="p-4 sm:p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-gray-600" />
              <span className="text-xs sm:text-sm text-green-600 font-semibold">
                99.9%
              </span>
            </div>
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-green-600" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
            24/7
          </div>
          <div className="text-xs sm:text-sm text-gray-600">Uptime</div>
        </div>
      </div>

      {/* Development Progress Chart */}
      <div className="bg-white rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-0">
          <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
            Development Progress
          </h4>
          <div className="flex items-center space-x-2">
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-emerald-500 rounded-full"></div>
            <span className="text-xs sm:text-sm text-gray-600">
              Real-time updates
            </span>
          </div>
        </div>
        <div className="h-24 sm:h-32 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg flex items-end justify-between px-2 sm:px-4 md:px-5 lg:px-6 pb-2 sm:pb-3 md:pb-4">
          <div
            className="w-6 sm:w-8 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t-lg"
            style={{ height: "60%" }}
          ></div>
          <div
            className="w-6 sm:w-8 bg-gradient-to-t from-teal-500 to-teal-400 rounded-t-lg"
            style={{ height: "80%" }}
          ></div>
          <div
            className="w-6 sm:w-8 bg-gradient-to-t from-emerald-600 to-emerald-500 rounded-t-lg"
            style={{ height: "45%" }}
          ></div>
          <div
            className="w-6 sm:w-8 bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t-lg"
            style={{ height: "90%" }}
          ></div>
          <div
            className="w-6 sm:w-8 bg-gradient-to-t from-teal-600 to-teal-500 rounded-t-lg hidden sm:block"
            style={{ height: "70%" }}
          ></div>
          <div
            className="w-6 sm:w-8 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t-lg hidden sm:block"
            style={{ height: "85%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;
